  // Perform install steps
  var CACHE_NAME = 'my-site-cache-v1';
  var urlsToCache = [
    '/',
    '/home/anurag/cartos/practice/anurag_personal/assignments/serviceWorker/app.js',
    '/home/anurag/cartos/practice/anurag_personal/assignments/serviceWorker/extras/Register A service worker.js'
  ];

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
              console.log('Opened cache');
              return cache.addAll(urlsToCache);
            })
    );
  });
