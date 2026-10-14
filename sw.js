const CACHE_NAME = 'ledger-cache-v1';
const urlsToCache = [
  '/Money-ledger-v2/',
  '/Money-ledger-v2/index.html',
  '/Money-ledger-v2/manifest.json'
];

// Установка и кэширование базовых файлов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Перехват запросов для работы офлайн
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
