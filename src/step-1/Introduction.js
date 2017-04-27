import React, {Component} from 'react';
import Note from '../Note';

class Introduction extends Component {
  render() {
    return(
      <div className="introduction">
        <h1>1. Introduction</h1>
        <p>In this codelabs, you will be learning what is a Progressive Web Application, how it works and how to build and deploy one.</p>
        <h2>What is a Progressive Web Application?</h2>
        <p>A progressive web application (pwa) uses modern web technologies to deliver native app like experience even when user is offline.</p>
        <h2>Features:</h2>  
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

        <h2>What you will learn</h2>
        <ul>
          <li>What is a App Shell Architecture?</li>
          <li>Service Worker and its lifecycle.</li>
          <li>Caching static resources.</li>
          <li>Native app like features.</li>
        </ul>

        <h2>Things you need</h2>
        <ul>
          <li><a href="https://www.google.com/chrome/browser/desktop/" target="_blank">Chrome Browser 46</a> or above.</li>
          <li>A Text Editor.</li>
          <li>Sample code.</li>
          <li>Basic knowledge of HTML, CSS, Javascript and DevTools.</li>
          <li><a href="https://nodejs.org/en/" target="_blank">Node</a> (for build process & deployment).</li>
        </ul>
        <p>Lets get started!</p>
        <Note type="facts">
          <p>While build your progressive web app, some of the codes such as <span>HTML</span> & <span>CSS</span> will be <span>copy and pasted</span> to reduce the time on development.</p>
        </Note>
      </div>
    );
  }
}

export default Introduction;
