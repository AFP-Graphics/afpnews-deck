importScripts("precache-manifest.ac5976c36709971811867d4663664ebc.js", "workbox-v3.2.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.2.0"});
workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp('https://api.afp.com/objects/'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp('https://api.afpforum.com/objects/'),
  workbox.strategies.staleWhileRevalidate()
)

// self.addEventListener('push', event => {
//   const title = 'Get Started With Workbox'
//   const options = {
//     body: event.data.text()
//   }
//   event.waitUntil(self.registration.showNotification(title, options))
// })

workbox.precaching.precacheAndRoute(self.__precacheManifest)
