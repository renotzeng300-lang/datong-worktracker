/* 大同發展中心工作管理平台 — 最簡易 Service Worker
   目的：讓「加到主畫面」在 Android 上能以獨立 App 模式開啟（無瀏覽器網址列）。
   本系統需要即時連線 Firebase，故不做離線快取，只是單純放行所有請求。 */
self.addEventListener('install', function(event){
  self.skipWaiting();
});
self.addEventListener('activate', function(event){
  self.clients.claim();
});
self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
});
