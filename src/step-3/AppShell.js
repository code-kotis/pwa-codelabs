import React, {Component} from 'react';
import Note from '../Note';
import appShellImg from './app-shell.png';

class AppShell extends Component {
  render() {
    return(
      <div className="appshell">
      	<h1>App Shell Architecture</h1>
      	<p>An app shell architecture is minimal level <span className="highlight bold no--bg">HTML, CSS, Javascript</span> required to power the application user interface. Cached app shell loads faster on the repeated visits and only the content is loaded dymanically.</p>
        <div className="offline__container">
      		<img src={appShellImg} alt="app shell" />
      	</div>

        <i>To save some coding time, App shell is already added to the codelabs sample repository of step 2.</i>
 
      	<Note type="facts">
          <p><span>Facts: </span> Using app shell model, <a href="housing.com" target="_blank">Housing.com</a> were able to load the page 30% faster than before. Read thier full <a href="https://developers.google.com/web/showcase/2016/pdfs/housing.pdf" target="_blank">case study</a>.</p>
        </Note>
      </div>
    );
  }
}

export default AppShell;
