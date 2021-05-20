self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('video-store').then(function (cache) {
      return cache.addAll([
        '/07-indexed-db-video/',
        '/07-indexed-db-video/index.html',
        '/07-indexed-db-video/main.js',
        '/07-indexed-db-video/style.css',
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
