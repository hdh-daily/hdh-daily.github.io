// 앱 설치용 최소 서비스워커. 저장(캐시)은 하지 않아 늘 최신 소식을 받는다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
