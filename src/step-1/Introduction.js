import React, {Component} from 'react';
import Note from '../Note';

class Introduction extends Component {

  htmlSVG() {
    return(
      <svg height="16" version="1.1" viewBox="0 0 12 16" width="12">
        <path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path>
      </svg>
    )
  }

  render() {
    return(
      <div className="introduction">
        <h1>1. Introduction</h1>
        <p>In this codelabs, you will be learning what is a progressive web application, how it works and how to build one.</p>
        <p><b>What is a Progressive Web Application?</b></p>
        <p>A progressive web application (pwa) uses modern web technologies to deliver native app like experience even when user is offline. Features are.</p>
        <ul className="pwa">
          <li>{this.htmlSVG()} <b>Responsive</b> - Fits any form factor and works across the devices.</li>
          <li>{this.htmlSVG()} <b>Secure</b> - Served via https <span className="big">🔒</span>.</li>
          <li>{this.htmlSVG()} <b>App like</b> - Using app shell architecture to provide native app like experience.</li>
          <li>{this.htmlSVG()} <b>Discoverable</b> - Manifest and service workers allows search engine to find them.</li>
          <li>{this.htmlSVG()} <b>Installable</b> - Add to homescreen.</li>
          <li>{this.htmlSVG()} <b>Linkable</b> - No installation like native apps, easy to share.</li>
        </ul>
        <p><b>What you will learn</b></p>
        <ul>
          <li>Service worker and its lifecycle</li>
          <li>How to cache resources and serve it when offline</li>
          <li>Push notifications</li>
          <li>Background sync</li>
        </ul>
        <p><b>Things you need</b></p>
        <ul>
          <li><a href="https://www.google.com/chrome/browser/desktop/" target="_blank">Chrome Browser</a> 46 or above</li>
          <li>Text Editor</li>
          <li>Sample code</li>
          <li>Basic knowledge of <span className="highlight">HTML</span> <span className="highlight">CSS</span> <span className="highlight">Javascript</span> and <span className="highlight">DevTools</span></li>
          <li><a href="https://nodejs.org/en/" target="_blank">Node</a> (for deployment)</li>
        </ul>

        <Note>
          <h4>Facts: </h4>
          <p>Flipkart triples time-on-site with <a href="https://developers.google.com/web/showcase/2016/flipkart" target="_blank">Progressive Web App</a> and got 40% higher re-engagement rate.</p>
        </Note>
      </div>
    );
  }
}

export default Introduction;
