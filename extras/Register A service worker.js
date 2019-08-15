if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // navigator.serviceWorker.register('/sw.js').then(function(registration) {
    navigator.serviceWorker.register('/home/anurag/cartos/practice/anurag_personal/assignments/serviceWorker/app.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
