// import { BASE_URL } from './js/const';
const CACHE_NAME = `info_mc_${new Date().toISOString()}`;
let urlToCache = [
  '/',
  '/nav.html',
  '/index.html',
  '/style/material-icons.css',
  '/style/style.css',
  '/pages/home.html',
  '/pages/pemain.html',
  '/pages/pinjadwal.html',
  '/pages/pinpemain.html',
  '/pages/tanding.html',
  '/js/app.js',
  '/js/const.js',
  '/js/sw.js',
  '/js/api/db.js',
  '/js/api/jadwal.controller.js',
  '/js/api/pemain.controller.js',
  '/js/components/content.js',
  '/js/components/nav.js',
  '/js/components/pemain.js',
  '/js/components/pinJadwal.js',
  '/js/components/pinPemain.js',
  '/js/components/tanding.js',
  '/js/data/dataPemain.js',
  '/js/data/dataPinJadwal.js',
  '/js/data/dataPinPemain.js',
  '/js/data/dataTanding.js',
  '/js/helpers/convertDate.js',
  '/js/helpers/status.js',
  '/images/city-team-min.jpg',
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
