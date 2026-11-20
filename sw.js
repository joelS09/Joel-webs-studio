/* Ya no hay app instalable. Este archivo solo borra el service worker y la caché que haya quedado en los navegadores y se desactiva solo. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil((async()=>{try{const k=await caches.keys();await Promise.all(k.map(x=>caches.delete(x)))}catch(_){}try{await self.registration.unregister()}catch(_){}const cl=await self.clients.matchAll({type:'window'});cl.forEach(c=>c.navigate(c.url).catch(()=>{}))})())});
