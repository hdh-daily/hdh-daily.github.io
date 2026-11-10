// 앱 설치용 최소 서비스워커. 저장(캐시)은 하지 않아 늘 최신 소식을 받는다.
// 11/10: 화면(html)은 브라우저 캐시도 건너뛰고 늘 새로 받음(고친 화면이 폰에 늦게 반영되던 문제)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.mode === 'navigate') e.respondWith(fetch(r.url, { cache: 'no-store', credentials: 'same-origin' }).catch(() => fetch(r)));
  else e.respondWith(fetch(r));
});