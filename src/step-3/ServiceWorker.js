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
  navigator.serviceWorker.register('./service-worker.js')
    .then(function (registration) {
      console.log('service worker is registered!');
    })
    .catch(function (error) {
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
  'https://fonts.googleapis.com/css?family=Roboto:regular,bold,medium&amp;lang=en',
];

//Adding 'install' event listener
self.addEventListener('install', function (event) {
  console.log('Event: Install');
  event.waitUntill(
    //Add the files to cache here
  );
});`;

    const activateEvent =
`/* In service-worker.js */

//Adding 'activate' event listener
self.addEventListener('activate', function (event) {
  console.log('Event: Activate');
  event.waitUntil(
    //Delete unwanted and old caches here
  );
});
`;

    const fetchEvent =
`/* In service-worker.js */

//Adding 'fetch' event listener
self.addEventListener('fetch', function (event) {
  console.log('Event: Fetch', event.request.url);

  //Tell the browser to wait for network request and respond with below
  event.respondWith(
    //Check the caches.
    //If request is already in cache, return its response
    //Else, make a fetch and add the request to the cache
    })
  );
});
`;

    return(
      <div className="serviceworker">
        <h1>3. Service Worker</h1>
        <p>A service worker is a event driven worker which runs in the background and sits in between your application and the browser. It can intercept and handle the network requests for the registered domain. It doesn't have <span className="hightlight bold no--bg">DOM</span> access.</p>
        <Note type="notes">
          <p><span>Tips: </span> Service worker will work only when the page is served via https. For testing and development purposes it works in <span className="hightlight bold no--bg">http://localhost</span>.</p>
        </Note>

        <p>Know more about <a href="https://github.com/w3c/ServiceWorker/blob/master/explainer.md" target="_blank">service worker</a>.</p>

        <h2>How to register a service worker?</h2>
        <p>A service worker is registered by passing the service-worker file (should be in root directory) in the <span className="hightlight bold">register</span> method which returns a promise like below.</p>
        <Highlight lang='javascript' value={registerEvent} />

        <h2>Service Worker Lifecycle</h2>
        <ul>
          <li><b>Install Event</b> - After successful service worker registration, install event is triggered and happens only once.</li>
          <li><b>Activate Event</b> - To clean up unwanted and old caches.</li>
          <li><b>Fetch Event</b> - Triggers for every request made by your application.</li>
        </ul>

        <h2>Install Event</h2>
        <p>After registering the service worker, <span className="hightlight bold">install event</span> is fired. Fetch event wont happen unless the install event is successful. But don’t expect them to take control of the page on the first visit, you need to refresh the page to see the effects of service worker.</p>

        <Highlight lang='javascript' value={installEvent} />

        <h2>Activate Event</h2>
        <p>After successful install event, <span className="hightlight bold">activate</span> event is fired on various cases. Below are some of them.</p>

        <h2>When an activate is triggered?</h2>
        <ul>
          <li>If there is no current active service worker.</li>
          <li>On navigating to a page which is in service worker scope.</li>
          <li>During the <span className="hightlight bold">push</span>, <span className="hightlight bold">sync</span> event.</li>
        </ul>

        <Highlight lang='javascript' value={activateEvent} />

        <Note type="tips">
          <p><span>Tips: </span> By using <span className="hightlight bold no--bg">self.clients.claim()</span> method in activate event, we can tell service worker to set itself as the active on current client and all other active clients.</p>
        </Note>

        <h2>Fetch Event</h2>
        <p>After activate event, <span className="hightlight bold">fetch</span> events are triggered. Whenever the browser requests a resourse within the service worker scope, fetch event can listen to network requests as shown below.</p>

        <Highlight lang='javascript' value={fetchEvent} />

        <h2>Browser Support</h2>
        <p>Service worker is supported in <span className="hightlight bold no--bg">Google Chrome</span>, <span className="hightlight bold no--bg">Mozilla Firefox</span>, <span className="hightlight bold no--bg">Opera</span> and support for <span className="hightlight bold no--bg">Microsoft Edge</span> is <a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/status/serviceworker/?q=service%20worker" target="_blank">in development</a>. For <span className="hightlight bold no--bg">Safari</span>, it is still <a href="https://webkit.org/status/?#specification-service-workers" target="_blank">under consideration</a> (🤖).</p>
        <img src={swSupport} alt="Browser support"/>
        <p>More details about service worker <a href="https://jakearchibald.github.io/isserviceworkerready/" target="_blank">browser support</a>.</p>


        <h2>Article References</h2>
        <ul>
          <li><a href="https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle" target="_blank">Web Fundamentals</a> - The Service Worker Lifecycle</li>
          <li><a href="https://www.smashingmagazine.com/2016/02/making-a-service-worker/" target="_blank">Smashing Magazine</a> - Making a service worker</li>
        </ul>
      </div>
    );
  }
}

export default ServiceWorker;
