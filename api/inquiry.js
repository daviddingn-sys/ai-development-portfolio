import { put } from '@vercel/blob';
import { randomUUID } from 'node:crypto';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!req.headers['content-type']?.toLowerCase().includes('application/json')) return res.status(415).json({ error: 'JSON only' });
  if (Number(req.headers['content-length'] || 0) > 12000) return res.status(413).json({ error: 'Request too large' });
  const input = req.body || {};
  const val = (x, max) => typeof x === 'string' ? x.trim().slice(0, max) : '';
  if (input.website) return res.status(200).json({ ok: true });
  const name = val(input.name, 80);
  const email = val(input.email, 150);
  const projectType = val(input.projectType, 80);
  const description = val(input.description, 2500);
  const timeline = val(input.timeline, 80);
  const budget = val(input.budget, 80);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || description.length < 20 || !projectType) return res.status(400).json({error:'Please fill name, valid email, project type and details (at least 20 characters).'});
  if (!process.env.BLOB_READ_WRITE_TOKEN) return res.status(503).json({error:'Intake storage not configured'});
  const id = randomUUID();
  const record = { id, receivedAt: new Date().toISOString(), name, email, projectType, description, timeline, budget, source: 'portfolio-web' };
  try {
    await put('inquiries/' + record.receivedAt.substring(0, 10) + '/' + id + '.json', JSON.stringify(record), { access: 'private', contentType: 'application/json', addRandomSuffix: false });
    // Optional server-side notification, kept separate from the reliable storage write.
    // The webhook must belong to this portfolio, not to an unrelated business system.
    if (process.env.PORTFOLIO_FEISHU_WEBHOOK_URL) {
      try {
        const url = new URL(process.env.PORTFOLIO_FEISHU_WEBHOOK_URL);
        if (url.protocol !== 'https:' || url.hostname !== 'open.feishu.cn' || !url.pathname.startsWith('/open-apis/bot/v2/hook/')) {
          throw new Error('Invalid Feishu bot webhook configuration');
        }
        const notice = [
          '【个人作品集 · 新项目询价】',
          '类型：' + record.projectType,
          '时间：' + record.receivedAt,
          '编号：' + id,
          '请登录私有询价后台查看完整需求：',
          'https://ai-development-portfolio-eight.vercel.app/admin.html',
        ].join('\\n');
        const body = { msg_type: 'text', content: { text: notice } };
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        try {
          const response = await fetch(url.toString(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            signal: controller.signal,
          });
          const result = await response.json().catch(() => ({}));
          if (!response.ok || (result.code !== undefined && result.code !== 0)) {
            console.error('Feishu notification rejected', response.status, result.code);
          } else {
            console.info('Feishu notification accepted', id, response.status, result.code ?? result.StatusCode ?? 'unknown');
          }
        } finally { clearTimeout(timeout); }
      } catch (err) { console.error('Feishu notification failed', err?.message || err); }
    }
    return res.status(201).json({ ok: true, reference: id });
  } catch (error) {
    console.error('Unable to persist inquiry', error?.message || error);
    return res.status(500).json({ error: 'Unable to save inquiry. Please retry later.' });
  }
}
