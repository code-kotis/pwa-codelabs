import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import appOffline from './offline-app.png';
import cachedResources from './cached-resources.png';
import Note from '../Note';

class Offline extends Component {
  render() {
    const offlineEvent = `/* app.js */

var headerElement = document.querySelector('.header');
var menuElement = document.querySelector('.menu__header');

//Once the DOM is loaded, check for connectivity
document.addEventListener('DOMContentLoaded', function(event) {
  if (!navigator.onLine) {
    goOffline();
  }

  //Offline event listener
  window.addEventListener("offline", function () {
    goOffline();
  });

  //Offline Event
  function goOffline() {
    headerElement.style.background = '#9E9E9E';
    menuElement.style.background = '#9E9E9E';
  }

  //Online Event
  window.addEventListener("online", function () {
    headerElement.style.background = '';
    menuElement.style.background = '';
  });
});
`;
    return(
      <div className="offline">
        <h1>Step 3 - Offline Experience</h1>

        <p>Service worker allow us to use cache API to cache the resources and thus by providing offline experience. By caching the app shell, application loads faster on the repeated visits.</p>

        <Note>
          <p><span>Note:</span> Resources cached via cache API can be view in <span className="highlight bold no--bg"> Chrome Dev Tools > Application > Cache Storage</span>.</p>
        </Note>

        <b>Refer the below image:</b>

        <div className="offline__container">
          <img className="" src={cachedResources} alt="cached resources" />
        </div>

        <p>More details about <a href="https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage">Cache API</a>.</p>

        <h2>Offline/Online Events</h2>
        <p>By using <span className="highlight bold no--bg">offline/online events</span>, we can let the user know when he is offline or call an API when he has connectivity again.</p>

        <Highlight lang='javascript' value={offlineEvent} />

        <Note type="tips">
          <p><span>Tips:</span> Emulate offline in Devtools by opening <span className="highlight bold no--bg">Chrome Dev Tools > Network Tab > Offline</span>.</p>
        </Note>

        <i><b>Screenshot:</b></i>

        <div className="offline__container">
          <img className="" src={appOffline} alt="app offline" />
        </div>
      </div>
    );
  }
}

export default Offline;
