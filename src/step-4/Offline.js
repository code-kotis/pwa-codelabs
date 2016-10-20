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

        <i>Note: To save some coding time, App shell is already added to the codelabs sample repository.</i>

      	<div className="offline__container">
      		<img src={appShell} alt="app shell" />
      	</div>
 
      	<Note type="facts">
          <p><span>Facts: </span> Housing.com used app shell architecture in their <a href="housing.com" target="_blank">progressive web app</a> to load the page 30% faster than before. Read thier full <a href="https://developers.google.com/web/showcase/2016/pdfs/housing.pdf" target="_blank">case study</a>.</p>
        </Note>
        
        <p>Let the user know when he goes offline is an important feature.</p>
        
        <div className="offline__container">
          <img className="" src={appOffline} alt="app offline" />
        </div>
      </div>
    );
  }
}

export default Offline;
