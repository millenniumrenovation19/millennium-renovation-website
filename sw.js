const CACHE='millennium-app-v1';
const CORE=['/','/app-install.js','/manifest.webmanifest','/app-icons/icon-192.png','/app-icons/icon-512.png','/business/','/business/business.js','/business/business.css','/images/branding/millennium-logo-transparent.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('millennium-app-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
 // Network first for pages and source files; do not cache form submissions or remote requests.
 e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(async()=>{const cached=await caches.match(e.request);return cached||new Response('You are offline. Connect to the internet to load this page.',{status:503,headers:{'Content-Type':'text/plain'}});}));
});
