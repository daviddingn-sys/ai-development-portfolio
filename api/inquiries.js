import { list, get, del } from '@vercel/blob';
import { timingSafeEqual } from 'node:crypto';
function equal(a,b) {
 const x=Buffer.from(a || ''), y=Buffer.from(b || '');
 return x.length===y.length && timingSafeEqual(x,y);
}
export default async function handler(req,res) {
 res.setHeader('Cache-Control','private, no-store');
 res.setHeader('X-Content-Type-Options','nosniff');
 if(!['GET','DELETE'].includes(req.method)) return res.status(405).json({error:'Method not allowed'});
 const expected=process.env.INQUIRY_ADMIN_SECRET;
 const supplied=(req.headers.authorization || '').replace(/^Bearer /i,'');
 if(!expected || !equal(expected,supplied)) return res.status(401).json({error:'Unauthorized'});
 try{
   if (req.method === 'DELETE') {
     const id = typeof req.query?.id === 'string' ? req.query.id : '';
     if (!/^[0-9a-f-]{36}$/.test(id)) return res.status(400).json({error:'Invalid reference'});
     const page = await list({prefix:'inquiries/',limit:100});
     const target = page.blobs.find(item => item.pathname.endsWith('/' + id + '.json'));
     if (!target) return res.status(404).json({error:'Not found'});
     await del(target.url);
     return res.status(200).json({ok:true,removed:id});
   }
   const page=await list({prefix:'inquiries/',limit:30});
   const entries=[];
   for(const item of page.blobs) {
     const result=await get(item.pathname,{access:'private'});
     if(result?.statusCode===200 && result.stream) {
       const text=await new Response(result.stream).text();
       const row=JSON.parse(text);
       entries.push(row);
     }
   }
   return res.status(200).json({ok:true,count:entries.length,records:entries,hasMore:page.hasMore});
 }catch(error) {
   console.error('Inquiry review error',error?.message||error);
   return res.status(500).json({error:'Could not load inquiries'});
 }
}
