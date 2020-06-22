console.log('hello from sw');

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js',
);

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'api-fetch-cache',
    cacheExpiration: {
      maxAgeSeconds: 24 * 60 * 60,
    },
  }),
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
