const filesToCache = [
    'offline.html'
];
  
const staticCacheName = 'v1';

// INSTALL
self.addEventListener('install', event => {
    console.log('SW installed at: ', new Date().toLocaleTimeString());

    self.skipWaiting()

    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(filesToCache)
        })
    )

});

// ACTIVATE
self.addEventListener('activate', event => {
    console.log('SW activated at: ', new Date().toLocaleTimeString());
    
      const cacheWhitelist = [staticCacheName];
    
      event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });


// FETCH
self.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request)
        
        .then(response => {
            
            return caches.open(staticCacheName).then(cache => {
              cache.put(event.request.url, response.clone());
              return response;
            });
          });
  
      }).catch(error => {
        console.log(error)

        return caches.match('offline.html')
      })
    );
  });