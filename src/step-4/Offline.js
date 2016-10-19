import React, {Component} from 'react';
import Note from '../Note';
import appShell from './app-shell.png';

class Offline extends Component {
  render() {
    return(
      <div className="offline">
      	<h1>Offline</h1>
      	<p>Making an application to work even when its offline is powerful feature.</p>

      	<h2>App Shell Architecture</h2>
      	<p>An app shell architecture is minimal level HTML, CSS, Javascript required to show the application user interface. By caching the app shell, application loads fast and repeated visits loads even faster.</p>
      	<div className="offline__container">
      		<img src={appShell} alt="app shell" />
      	</div>

      	<Note>
      	</Note>
      </div>
    );
  }
}

export default Offline;
