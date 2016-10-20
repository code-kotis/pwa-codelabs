import React, {Component} from 'react';
import Note from '../Note';
import appShellImg from './app-shell.png';

class AppShell extends Component {
  render() {
    return(
      <div className="appshell">
      	<h1>What is App Shell Architecture?</h1>
      	<p>An app shell architecture is minimal level <span className="highlight bold no--bg">HTML, CSS, Javascript</span> required to show the application user interface.</p>
        
        <i>Note: To save some coding time, App shell is already added to the codelabs sample repository.</i>

      	<div className="offline__container">
      		<img src={appShellImg} alt="app shell" />
      	</div>
 
      	<Note type="facts">
          <p><span>Facts: </span> Housing.com used app shell architecture in their <a href="housing.com" target="_blank">progressive web app</a> to load the page 30% faster than before. Read thier full <a href="https://developers.google.com/web/showcase/2016/pdfs/housing.pdf" target="_blank">case study</a>.</p>
        </Note>
      </div>
    );
  }
}

export default AppShell;
