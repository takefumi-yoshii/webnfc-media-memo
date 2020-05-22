self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
  console.log('sw installed')
})
self.addEventListener('activate', (event) => {
  console.log('sw activated')
})
