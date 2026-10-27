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
    return res.status(201).json({ ok: true, reference: id });
  } catch (error) {
    console.error('Unable to persist inquiry', error?.message || error);
    return res.status(500).json({ error: 'Unable to save inquiry. Please retry later.' });
  }
}
