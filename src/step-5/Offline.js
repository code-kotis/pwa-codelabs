import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import appOffline from './offline-app.png';
import cachedResources from './cached-resources.png';
import Note from '../Note';

class Offline extends Component {
  render() {
  	const offlineEvent = `/* app.js */

//After DOM is loaded, do offline stuff
document.addEventListener('DOMContentLoaded', function(event) { 
  //On page load, if user is offline
  if (!navigator.onLine) {
    //Do some stuff here
  }

  //Offline Event
  window.addEventListener("offline", function () {
    //Do some stuff here
  });

  //Online Event
  window.addEventListener("online", function () {
    //Do some stuff here
  });
});
`;
    return(
      <div className="offline">
        <h1>Offline Experience</h1>

        <p>Service worker allow us to use cache API to cache the resources and thus by providing offline experience. By caching the app shell, application loads faster repeated visits.</p>

        <Note>
          <p><span>Note:</span> Resources cached via cache API can be view in <span className="highlight bold no--bg"> Chrome Dev Tools > Application > Cache Storage</span>.</p>
        </Note>

        <b>Refer the below image:</b>

        <div className="offline__container">
          <img className="" src={cachedResources} alt="cached resources" />
        </div>

        <p>More details about <a href="https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage">Cache API</a>.</p>

        <h2>Taking advantage of built-in events</h2>     
				<p>By using <span className="highlight bold no--bg">offline/online events</span>, we can let the user know when he is offline or call an API when he has connectivity again.</p>        
				
				<Highlight lang='javascript' value={offlineEvent} />

        <div className="offline__container">
          <img className="" src={appOffline} alt="app offline" />
        </div>
        
      </div>
    );
  }
}

export default Offline;
