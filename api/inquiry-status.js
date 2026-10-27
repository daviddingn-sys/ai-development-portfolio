import { put, list, get, del } from '@vercel/blob';
import { timingSafeEqual } from 'node:crypto';
const statuses=['new','contacted','requirements','won','lost','archived'];
function authorized(req){const secret=process.env.INQUIRY_ADMIN_SECRET||'';const a=(req.headers.authorization||'').replace(/^Bearer /i,'');const x=Buffer.from(secret),y=Buffer.from(a);return !!secret&&x.length===y.length&&timingSafeEqual(x,y)}
export default async function handler(req,res){
 res.setHeader('Cache-Control','private,no-store');
 if(!authorized(req))return res.status(401).json({error:'Unauthorized'});
 if(req.method!=='PATCH')return res.status(405).json({error:'Method not allowed'});
 const id=typeof req.query?.id==='string'?req.query.id:'';
 if(!/^[a-f0-9-]{36}$/.test(id))return res.status(400).json({error:'Invalid reference'});
 const status=typeof req.body?.status==='string'?req.body.status:'';
 const note=typeof req.body?.note==='string'?req.body.note.trim():'';
 if(!statuses.includes(status)||note.length>1500)return res.status(400).json({error:'Invalid status or note'});
 try{
  const found=await list({prefix:'inquiries/',limit:100});
  const target=found.blobs.find(item=>item.pathname.endsWith('/'+id+'.json'));
  if(!target)return res.status(404).json({error:'Not found'});
  const data=await get(target.pathname,{access:'private'});
  if(data?.statusCode!==200||!data.stream)return res.status(500).json({error:'Cannot load record'});
  const record=JSON.parse(await new Response(data.stream).text());
  const updated={...record,status,note,updatedAt:new Date().toISOString()};
  await put(target.pathname,JSON.stringify(updated),{access:'private',contentType:'application/json',addRandomSuffix:false,allowOverwrite:true});
  return res.status(200).json({ok:true,reference:id,status});
 }catch(e){console.error('status update failed',e?.message||e);return res.status(500).json({error:'Update failed'})}
}
