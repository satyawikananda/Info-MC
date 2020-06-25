const CACHE_NAME = `info_mc_11`;
let urlToCache = [
  '/',
  '/nav.html',
  '/index.html',
  '/src/style/material-icons.css',
  '/src/style/style.css',
  '/src/pages/home.html',
  '/src/pages/pemain.html',
  '/src/pages/pinjadwal.html',
  '/src/pages/pinpemain.html',
  '/src/pages/tanding.html',
  '/src/js/app.js',
  '/src/js/push.js',
  '/src/js/const.js',
  '/src/js/api/db.js',
  '/src/js/api/jadwal.controller.js',
  '/src/js/api/pemain.controller.js',
  '/src/js/api/push.config.js',
  '/src/js/components/content.js',
  '/src/js/components/nav.js',
  '/src/js/components/pemain.js',
  '/src/js/components/pinJadwal.js',
  '/src/js/components/pinPemain.js',
  '/src/js/components/tanding.js',
  '/src/js/data/dataPemain.js',
  '/src/js/data/dataPinJadwal.js',
  '/src/js/data/dataPinPemain.js',
  '/src/js/data/dataTanding.js',
  '/src/js/helpers/convertDate.js',
  '/src/js/helpers/status.js',
  '/src/js/helpers/uint8array.js',
  '/src/images/city-team-min.jpg',
  '/src/images/icons/icon-72x72.png',
  '/src/images/icons/icon-96x96.png',
  '/src/images/icons/icon-128x128.png',
  '/src/images/icons/icon-144x144.png',
  '/src/images/icons/icon-152x152.png',
  '/src/images/icons/icon-192x192.png',
  '/src/images/icons/icon-384x384.png',
  '/src/images/icons/icon-512x512.png',
];

self.addEventListener('install', function (e) {
  console.log('Service worker sedang menginstall');
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Membuka cache');
      return cache.addAll(urlToCache);
    }),
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches
      .match(e.request, { cacheName: CACHE_NAME })
      .then(function (response) {
        if (response) {
          return response;
        }
        const fetchRequest = e.request.clone();
        return fetch(fetchRequest).then(function (response) {
          if (!response || response.status !== 200) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(e.request, responseToCache);
          });
          return response;
        });
      }),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName != CACHE_NAME) {
            console.log(
              `Serviceworker: cache ${cacheName} has been deleted`,
            );
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener('push', (e) => {
  let body;
  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Push message tidak ada payload';
  }

  const options = {
    body: body,
    icon:
      'https://upload.wikimedia.org/wikipedia/id/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };

  e.waitUntil(
    self.registration.showNotification(
      'Manchester city info',
      options,
    ),
  );
});
