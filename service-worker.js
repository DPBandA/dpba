const CACHE_NAME = 'dpb-cache-v1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/offline',
    '/assets/css/font-awesome.min.css',
    '/assets/css/global.css',
    '/assets/css/responsive.css',
    '/assets/css/style.css',
    '/assets/css/utility.css',
    '/assets/js/main.js',
    '/assets/js/lunr.js',
    '/assets/manifest.json',
    '/assets/media/logo.png',
    '/assets/icons/icon-192.png',
    '/assets/icons/icon-512.png'
];

// Install event - cache all specified files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate event - remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch event - respond with cache first, then network, 
// fallback to offline.html if navigation request fails
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).catch(() => {
          // Offline fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/offline');
          }
          // For other requests, just fail silently or handle as needed
        });
      })
  );
});