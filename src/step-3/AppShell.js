import React, {Component} from 'react';
import Note from '../Note';
import appShellImg from './app-shell.png';
import appShellRepeated from './3g-network-repeated-visit.png';
import filmStrip from './filmstrip.png';

class AppShell extends Component {
  render() {
    return(
      <div className="appshell">
      	<h1>App Shell Architecture</h1>
      	<p>An app shell architecture is minimal level <span className="highlight bold no--bg">HTML, CSS, Javascript</span> required to power the application user interface. Cached app shell loads faster on the repeated visits and only the content in app shell is loaded dymanically everytime.</p>
        <div className="offline__container">
      		<img src={appShellImg} alt="app shell" />
      	</div>

        <i>To save some coding time, App shell is already added to the codelabs sample repository of step 2.</i>

        <h1>Performance</h1>
        <p>To measure the performance of the app shell, we did some series of tests.</p>

        <b>Test 1: DevTools</b>
        <p>Lets emulate 3G connection in DevTools. On the repeated visits, app shell was loaded within a few <span className="highlight bold no--bg">milli seconds</span>.</p>

        <div className="offline__container">
          <img src={appShellRepeated} alt="devTools network panel" />
        </div>
        
        <b>Test 2: Webpagetest</b>
        <p>In webpagetest, we measured the same site in <span className="highlight bold no--bg">Chrome - 3G</span>. Results are below.</p>

        <div className="offline__container">
          <img src={filmStrip} alt="web page test" />
        </div>

        <p>See the <a href="http://www.webpagetest.org/result/161021_1H_G6C/">full result</a></p>

        <h3>Application using app shell in production</h3>
        <p>Few of them are</p>
        <ul>
          <li><a href="https://www.google.com/inbox/" target="_blank">Inbox</a> by Gmail</li>
          <li><a href="flipkart.com" target="_blank">Flipkar Lite</a></li>
          <li><a href="housing.com" target="_blank">Housing.com</a> mobile site</li>
        </ul>
 
      	<Note type="facts">
          <p><span>Facts: </span> Using app shell model, <a href="housing.com" target="_blank">Housing.com</a> were able to load the page 30% faster than before. Read thier full <a href="https://developers.google.com/web/showcase/2016/pdfs/housing.pdf" target="_blank">case study</a>.</p>
        </Note>
      </div>
    );
  }
}

export default AppShell;
