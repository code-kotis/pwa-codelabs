import React, {Component} from 'react';
import Note from '../Note';
import Highlight from 'react-syntax-highlight';
import appShellImg from './app-shell.png';
import appShellRepeated from './3g-network-repeated-visit.png';
import filmStrip from './filmstrip.png';

class AppShell extends Component {
  render() {
    const appShellCode =
    `<!-- Header  -->
<header class="header">
  <div class="header__container">
    <div class="header__icon">
      <!-- Header Icon  -->
    </div>
    <h1>Title</h1>
  </div>
</header>

<!-- Menu  -->
<div class="menu">
  <div class="menu__header"></div>
  <ul class="menu__list">
    <li><a href="/">Home</a></li>
  <ul>
</div>

<!-- Menu Overlay -->
<div class="menu__overlay"></div>

<!-- Main Section -->
<div class="main"></div>`;

    return(
      <div className="introduction appshell">
        <h1>App Shell Architecture</h1>
        <p>An app shell architecture is minimal level <span className="highlight bold no--bg">HTML, CSS, Javascript</span> required to power the application user interface.</p>

        <h3>Components for App Shell</h3>
        <ul className="">
          <li>Header with icon and title</li>
          <li>Menu with overlay</li>
          <li>Main section</li>
        </ul>

        <h3>HTML for App Shell</h3>

        <Highlight lang='html' value={appShellCode} />

        <i><b>Screenshot:</b></i>

        <div className="offline__container">
          <img src={appShellImg} alt="app shell" />
        </div>

        <h1>Performance</h1>
        <p>By caching the app shell, repeated visits on the application loads faster. To measure the performance of the app shell, we did some series of tests.</p>

        <b>Test 1: DevTools</b>
        <p>Lets emulate 3G connection in DevTools. On the repeated visits, app shell was loaded within a few <span className="highlight bold no--bg">milli seconds</span>.</p>

        <div className="offline__container">
          <img src={appShellRepeated} alt="devTools network panel" />
        </div>

        <b>Test 2: Webpagetest</b>
        <p>In webpagetest, we measured the same site in <span className="highlight bold no--bg">Chrome - 3G</span>. Load time for repeat visits was <span className="highlight bold no--bg">3.015s</span> Results are below.</p>

        <div className="offline__container">
          <img src={filmStrip} alt="web page test" />
        </div>

        <p>See the full result <a href="http://www.webpagetest.org/result/161021_1H_G6C/">here</a>.</p>

        <h3>Applications using app shell in production</h3>
        <ul>
          <li><a href="https://www.google.com/inbox/" target="_blank">Inbox</a> by Gmail</li>
          <li><a href="flipkart.com" target="_blank">Flipkar Lite</a></li>
          <li><a href="housing.com" target="_blank">Housing.com</a> mobile site</li>
        </ul>

        <Note type="facts">
          <p><span>Facts: </span> Using app shell model, <a href="housing.com" target="_blank">Housing.com</a> were able to load the page 30% faster than before. Read thier full case study <a href="https://developers.google.com/web/showcase/2016/pdfs/housing.pdf" target="_blank">here</a>.</p>
        </Note>
      </div>
    );
  }
}

export default AppShell;
