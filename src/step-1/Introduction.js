import React, {Component} from 'react';
import Note from '../Note';

class Introduction extends Component {
  render() {
    return(
      <div className="introduction">
        <h1>1. Introduction</h1>
        <p>In this codelabs, you will be learning what is a progressive web application, how it works and how to build one.</p>
        <p><b>What is a Progressive Web Application?</b></p>
        <p>A progressive web application (pwa) uses modern web technologies to deliver native app like experience even when user is offline. Features are.</p>
        <ul className="pwa">
          <li><b>Responsive</b> - Fits any form factor and works across the devices.</li>
          <li><b>Secure</b> - Served via https <span className="big">🔒</span>.</li>
          <li><b>App like</b> - Using app shell architecture to provide native app like experience.</li>
          <li><b>Fresh</b> - Always up-to-date due to service worker.</li>
          <li><b>Connectivity independent</b> - Serves content even when its offline or in slow connections.</li>
          <li><b>Discoverable</b> - Manifest and service workers allows search engine to find them.</li>
          <li><b>Installable</b> - Add to homescreen.</li>
          <li><b>Linkable</b> - Easy to share.</li>
        </ul>
        
        <p><b>What you will learn</b></p>
        <ul>
          <li>Whats is a Service worker and its lifecycle</li>
          <li>How to cache resources and serve it when offline</li>
          <li>Push notifications</li>
          <li>Background sync</li>
        </ul>
        
        <p><b>Things you need</b></p>
        <ul>
          <li><a href="https://www.google.com/chrome/browser/desktop/" target="_blank">Chrome Browser</a> 46 or above</li>
          <li>Text Editor</li>
          <li>Sample code</li>
          <li>Basic knowledge of HTML, CSS, Javascript and DevTools.</li>
          <li><a href="https://nodejs.org/en/" target="_blank">Node</a> (for deployment)</li>
        </ul>

        <Note type="facts">
          <p><span>Facts: </span> Flipkart triples time-on-site with <a href="https://developers.google.com/web/showcase/2016/pdfs/flipkart.pdf" target="_blank">Progressive Web App</a> and got 40% higher re-engagement rate.</p>
        </Note>
      </div>
    );
  }
}

export default Introduction;
