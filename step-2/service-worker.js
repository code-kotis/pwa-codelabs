var cacheName = 'cache-v1'; //Cache Name

//Files to cache
var filesToCache = [
	'./index.html',
	'./index.html?utm=homescreen', //Query strings are treated as seperate page
	'./css/styles.css',
  './js/menu.js',
	'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' //3rd party resource
];

//Adding 'install' event listener
self.addEventListener('install', function (event) {
  console.log('Event: Install');

  //Adding the static resources to cache
  event.waitUntil(
  	//Open the cache
  	caches.open(cacheName)
  		.then(function (cache) {
  			//Adding the files to cache
  			return cache.addAll(filesToCache)
  				.then(function () {
  					console.log("All files are cached.");
  				})
  		})
  		.catch(function (err) {
  			console.log("Error occurred while caching ", err);
  		})
	);
});

//Adding 'activate' event listener
self.addEventListener('activate', function (event) {
  console.log('Event: Activate');
});

//Adding 'fetch' event listener
self.addEventListener('fetch', function (event) {
  console.log('Event: Fetch - ', event.request.url);
});
