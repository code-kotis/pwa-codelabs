
//Adding 'install' event listener
self.addEventListener('install', function (event) {
  console.log('Event: Install');
});

//Adding 'activate' event listener
self.addEventListener('activate', function (event) {
  console.log('Event: Activate');
});

//Adding 'fetch' event listener
self.addEventListener('fetch', function (event) {
  console.log('Event: Fetch - ', event.request.url);
});
