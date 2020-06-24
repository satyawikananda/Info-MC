import { dataFile } from './js/data/dataFile.js';
const CACHE_NAME = 'Info-MC';
console.log(dataFile);

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js',
);

if (workbox) {
  workbox.precaching.precacheAndRoute(dataFile);

  workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: `${CACHE_NAME}-pages`,
    }),
  );

  workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.cacheFirst({
      cacheName: `${CACHE_NAME}-API`,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    }),
  );
} else {
  console.log('Workbox failed to be load');
}

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
