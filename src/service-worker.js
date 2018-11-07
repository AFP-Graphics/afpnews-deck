workbox.core.setCacheNameDetails({prefix: 'afpnews-deck'});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  ignoreUrlParametersMatching: [/.*/],
  cleanUrls: false
});

workbox.routing.registerRoute(
  /https:\/\/api.afp.com\/objects\//,
  workbox.strategies.cacheFirst({
    cacheName: 'afpnews-assets',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
        purgeOnQuotaError: true
      }),
      new workbox.backgroundSync.Plugin('afpnews-assets-queue', {
        maxRetentionTime: 5 // Retry for max of 5 minutes
      })
    ]
  }), 'GET'
);

workbox.googleAnalytics.initialize();

self.addEventListener('message', event => {
  if (!event.data){
    return;
  }

  switch (event.data) {
    case 'skipWaiting':
      self.skipWaiting();
      break;
    default:
      // NOOP
      break;
  }
});
