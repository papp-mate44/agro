/* Gazdálkodási napló – offline gyorsítótár */
const V='gazdanaplo-v21',TILES='gazdanaplo-tiles-v1',MAXT=500;
const SHELL=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V&&k!==TILES).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
async function trim(c){const ks=await c.keys();if(ks.length>MAXT)await Promise.all(ks.slice(0,ks.length-MAXT).map(k=>c.delete(k)))}
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;
 const u=new URL(r.url);
 if(u.hostname.includes('nominatim')||u.hostname.includes('open-meteo'))return;
 if(/arcgisonline|tile\.openstreetmap/.test(u.hostname)){
  e.respondWith(caches.open(TILES).then(async c=>{
   const hit=await c.match(r);
   const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')){c.put(r,res.clone());trim(c)}return res}).catch(()=>hit);
   return hit||net}));return}
 if(r.mode==='navigate'){
  e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put('index.html',cp));return res}).catch(()=>caches.match('index.html')));return}
 e.respondWith(caches.open(V).then(async c=>{
  const hit=await c.match(r);
  const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>hit);
  return hit||net}))});
