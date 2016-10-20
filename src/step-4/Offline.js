import React, {Component} from 'react';
import Note from '../Note';
import appShell from './app-shell.png';
import appOffline from './offline-app.png';

class Offline extends Component {
  render() {
    return(
      <div className="offline">
      	<h1>Offline</h1>
      	<p>Making an application to work in offline is powerful feature. By following app shell architecture, we can achieve fast and more reliable user interface.</p>

      	<h2>What is App Shell Architecture?</h2>
      	<p>An app shell architecture is minimal level <span className="hightlight bold no--bg">HTML, CSS, Javascript</span> required to show the application user interface. By caching the app shell, application loads fast and repeated visits loads even faster.</p>
      	<div className="offline__container">
      		<img src={appShell} alt="app shell" />
      	</div>
      	<Note>
          <p><span>Note: </span> To save some time, App shell is already added to the codelabs sample repository.</p>
      	</Note>

        <p>Letting user know when go goes offline is an important feature. Flipkarts achieve this by adding lighter color to application like below.</p>
        
        <div className="offline__container">
          <img className="offline__container-app" src={appOffline} alt="app offline" />
        </div>
      </div>
    );
  }
}

export default Offline;
