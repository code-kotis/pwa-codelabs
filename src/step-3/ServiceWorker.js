import React, {Component} from 'react';
import Note from '../Note';
import Highlight from 'react-syntax-highlight';

class ServiceWorker extends Component {
  render() {
    const register =
    `// If service worker is supported, then register it
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js').then(function (registration) {
    console.log('service worker is registered ', registration);
  })
  .catch(function (error) {
    console.log('service worker registration failed ', error);
  });
}
else {
  console.log('service worker is not supported.');
}`;

    const install =
    `var cacheName = 'static-v1';

//Files to cache
var filesToCache = [
  'index.html',
  'styles.css',
  'app.js'
];

//Adding 'install' event listener
self.addEventListener('install', function (event) {
  console.log('[Install] event');
  event.waitUntill(
    caches.open(cacheName)
      .then(function (cache) {
        return cache.addAll(filesToCache) //Adding the files to cache
          .then(function () {
            console.info('All files are cached.');
          })
      })
  );
});`;

    return(
      <div className="serviceworker">
        <h1>3. Service Worker</h1>
        <p>A service worker is a event driven worker which runs in the background and sits in between your application and the browser. Service worker can intercept and handle the network requests for the registered domain.</p>
        <Note>
          <h4>Note: </h4>
          <p>Service worker will work only when the page is served via https. Other <a href="http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features" target="_blank">origins</a> which as considered as secure (http://localhost).</p>
        </Note>

        <p>To know more about service worker <a href="https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API" target="_blank">read here</a>.</p>

        <p><b>Service Worker Lifecycle</b></p>
        <ul>
          <li><b>Install Event</b> - The first event a service worker gets and it only happens once.</li>
          <li><b>Activate Event</b> - After registering and install event, also used to clean up caches.</li>
          <li><b>Fetch Event</b> - Triggered for every request made by your application, after install.</li>
        </ul>

        <p><b>How to register a service worker ?</b></p>
        <p>A service worker is registered by passing the service-worker file path in <span className="hightlight bold">register</span> method which returns a promise like below.</p>
        <span className="syntax__filename">service-worker.js</span>
        <Highlight lang='javascript' value={register} />

        <p><b>Install Event</b></p>
        <p>After registering the service worker, <span className="hightlight bold">install event</span> is fired. Fetch event wont happen unless the install event is successful. Network request wont go through initial after installing the service worker, you need to refresh the page to see the effects of service worker.</p>


        <Highlight lang='javascript' value={install} />


        <p><b>Activate Event</b></p>

        <p><b><a href="https://jakearchibald.github.io/isserviceworkerready/" target="_blank">Browser Support</a></b></p>
      </div>
    );
  }
}

export default ServiceWorker;
