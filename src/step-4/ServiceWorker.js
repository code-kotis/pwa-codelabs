import React, {Component} from 'react';
import Note from '../Note';
import Highlight from 'react-syntax-highlight';
import swSupport from '../sw-support.png';

class ServiceWorker extends Component {
  render() {
    const registerEvent =
    `/* In index.html */

// If service worker is supported, then register it
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', {scope: './'}) // Scope of the service worker
    .then(function(registration) {
      console.log('service worker is registered!');
    })
    .catch(function(error) {
      console.log('service worker registration failed ', error);
    });
}
else {
  console.log('service worker is not supported.');
}`;

    const installEvent =
    `/* In service-worker.js */

var cacheName = 'cache-v1'; //Cache Name

//Files to cache
var filesToCache = [
  './index.html',
  './index.html?utm=homescreen', //query strings are treated as seperate page
  './css/styles.css',
  './js/menu.js',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700', //3rd party resource
];

//Adding 'install' event listener
self.addEventListener('install', function (event) {
  console.log('Event: Install');
  
  // waitUntil method extends the lifetime of an event
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
});`;

    const activateEvent =
`/* In service-worker.js */

//Adding 'activate' event listener
self.addEventListener('activate', function (event) {
  console.log('Event: Activate');
  
  //Delete unwanted and old caches here
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cache) {
          if (cache !== cacheName) {
            return caches.delete(cache); //Deleting the cache
          }
        })
      );
    })
  );
});
`;

    const fetchEvent =
`/* In service-worker.js */

//Adding 'fetch' event listener
self.addEventListener('fetch', function (event) {
  console.log('Event: Fetch');

  var request = event.request; // request made by the app

  //Tell the browser to wait for network request and respond with below
  event.respondWith(
    //If request is already in cache, return its response
    caches.match(request).then(function(response) {
      if (response) {
        return response;
      }

      //else make a request and add it to cache and return the response
      return fetch(request).then(function(response) {
        var responseToCache = response.clone(); //Cloning the response stream in order to add it to cache
        caches.open(cacheName).then(function(cache) {
            cache.put(request, responseToCache); //Adding to cache
          });

        return response;
      });
    })
  );
});
`;

    return(
      <div className="serviceworker">
        <h1>3. Service Worker</h1>
        <p>A service worker is a event driven worker which runs in the background and sits in between your application and the browser. It can intercept and handle the network requests for the registered domain.</p>
        <Note type="notes">
          <p><span>Tips: </span> Service worker will work only when the page is served via <span className="highlight bold no--bg">https</span>.</p>
        </Note>

        <p>Know more about service worker <a href="https://github.com/w3c/ServiceWorker/blob/master/explainer.md" target="_blank">here</a>.</p>

        <h2>How to register a service worker?</h2>
        <p>A service worker is registered by passing the service-worker file (should be in root directory) in the <span className="highlight bold no--bg">register</span> method which returns a promise like below.</p>

        <Highlight lang='javascript' value={registerEvent} />

        <h2>Service Worker Lifecycle</h2>
        <p>After successful service worker registration.</p>

        <ul>
          <li><b>Install</b> - First event and happens only once.</li>
          <li><b>Activate</b> - To clean up unwanted and old caches.</li>
          <li><b>Fetch</b> - Triggers for every network request made by your application.</li>
        </ul>

        <h2>1. Install Event</h2>
        <p>After registering the service worker, <span className="highlight bold no--bg">install event</span> is fired. But don’t expect service worker to take control of the page on the first visit, you need to refresh the page to see the effects.</p>

        <Highlight lang='javascript' value={installEvent} />

        <h2>2. Activate Event</h2>
        <p>After successful install event, <span className="highlight bold no--bg">activate event</span> is fired. Also it can happen on various cases, some of them are.</p>

        <h3>When an activate event is triggered?</h3>
        <ul>
          <li>If there is no current active service worker.</li>
          <li>On navigating to a page which is in service worker scope.</li>
          <li>During the <span className="highlight bold no--bg">push</span>, <span className="highlight bold no--bg">sync</span> event etc,.</li>
        </ul>

        <Highlight lang='javascript' value={activateEvent} />

        <h2>3. Fetch Event</h2>
        <p>After activate event, whenever the browser requests a resourse within the service worker scope, <span className="highlight bold no--bg">fetch events</span> is triggered.</p>

        <Highlight lang='javascript' value={fetchEvent} />

        <h2>Browser Support?</h2>
        <p>Service worker is currently supported in <span className="highlight bold no--bg">Google Chrome</span>, <span className="highlight bold no--bg">Mozilla Firefox</span>, <span className="highlight bold no--bg">Opera</span> and support for <span className="highlight bold no--bg">Microsoft Edge</span> is <a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/status/serviceworker/?q=service%20worker" target="_blank">in development</a>. For <span className="highlight bold no--bg">Safari</span>, it is still <a href="https://webkit.org/status/?#specification-service-workers" target="_blank">under consideration</a> 🤖.</p>
        <img src={swSupport} alt="Browser support"/>
        <p>More details about service worker <a href="https://jakearchibald.github.io/isserviceworkerready/" target="_blank"> support</a>.</p>


        <h2>Article References</h2>
        <ul>
          <li><a href="https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle" target="_blank">Web Fundamentals</a> - The Service Worker Lifecycle</li>
          <li><a href="https://www.smashingmagazine.com/2016/02/making-a-service-worker/" target="_blank">Smashing Magazine</a> - Making a service worker</li>
        </ul>

        {/*<Note type="tips">
          <p><span>Tips: </span> By using <span className="highlight bold no--bg">self.clients.claim()</span> method, we can tell the service worker to set itself as the active worker on current and all other active clients.</p>
        </Note>*/}
      </div>
    );
  }
}

export default ServiceWorker;
