import React, {Component} from 'react';
import Note from '../Note';
import appShellImg from './app-shell.png';
import appOffline from './offline-app.png';
import cachedResources from './cached-resources.png';

class AppShell extends Component {
  render() {
    return(
      <div className="offline">
      	<h1>What is App Shell Architecture?</h1>
      	<p>An app shell architecture is minimal level <span className="hightlight bold no--bg">HTML, CSS, Javascript</span> required to show the application user interface. By caching the app shell, application loads faster on the initial load and even faster on repeated visits.</p>
        
        <i>Note: To save some coding time, App shell is already added to the codelabs sample repository.</i>

      	<div className="offline__container">
      		<img src={appShellImg} alt="app shell" />
      	</div>
 
      	<Note type="facts">
          <p><span>Facts: </span> Housing.com used app shell architecture in their <a href="housing.com" target="_blank">progressive web app</a> to load the page 30% faster than before. Read thier full <a href="https://developers.google.com/web/showcase/2016/pdfs/housing.pdf" target="_blank">case study</a>.</p>
        </Note>

        <h2>Offline</h2>
        <p>Service worker allow us to use cache API to cache the resources and thus by providing offline experience.</p>
        
        <i>Note: Resources cached via cache API can be view in application tab in chrome DevTools. Refer the below image.</i>

        <div className="offline__container">
          <img className="" src={cachedResources} alt="cached resources" />
        </div>

        <p>More details about <a href="https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage">Cache API</a>.</p>

        <h2>Taking advantage of built-in events</h2>

        <div className="offline__container">
          <img className="" src={appOffline} alt="app offline" />
        </div>

      </div>
    );
  }
}

export default AppShell;
