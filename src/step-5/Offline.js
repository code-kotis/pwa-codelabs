import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import appOffline from './offline-app.png';
import cachedResources from './cached-resources.png';
import Note from '../Note';

class Offline extends Component {
  render() {
  	const offlineEvent = `/* app.js */

//After DOM load
document.addEventListener('DOMContentLoaded', function(event) { 
  var headerElement = document.querySelector('.header');
  var menuElement = document.querySelector('.menu__header');

  //On page load to check if the user is offline
  if (!navigator.onLine) {
    goOffline();
  }

  //Offline Event
  window.addEventListener("offline", function () {
    goOffline();
  });

  //Online Event
  window.addEventListener("online", function () {
    headerElement.style.background = '';
    menuElement.style.background = '';
  });
  
  //To change the header colors
  function goOffline() {
    var greyColor = '#9E9E9E';
    headerElement.style.background = greyColor;
    menuElement.style.background = greyColor;
  }
});
`;
    return(
      <div className="offline">
        <h1>Offline Experience</h1>

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
        
        <b>Screenshot when user is offline:</b>

        <div className="offline__container">
          <img className="" src={appOffline} alt="app offline" />
        </div>

        <Note type="tips">
          <p><span>Tips:</span> Emulate offline in Devtools by opening <span className="highlight bold no--bg">Chrome Dev Tools > Network > Offline</span>.</p>
        </Note>
        
      </div>
    );
  }
}

export default Offline;
