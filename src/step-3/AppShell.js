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

<!-- Main Section -->
<div class="main"></div>`;

    return(
      <div className="introduction appshell">
        <h1>Step 1 - App Shell Architecture</h1>
        <p>An app shell architecture is minimal level <span className="highlight bold no--bg">HTML, CSS, Javascript</span> required to power the application user interface.</p>

        <h2>Components for App Shell</h2>
        <ul className="">
          <li>Header with icon and title.</li>
          <li>Hamburger menu.</li>
          <li>Main section.</li>
        </ul>

        <h2>HTML for App Shell</h2>

        <Highlight lang='html' value={appShellCode} />

        <i><b>Screenshot:</b></i>

        <div className="offline__container">
          <img src={appShellImg} alt="app shell" />
        </div>

        <h1>Why you should use App Shell Architecture?</h1>
        <h2>Performance</h2>
        <p>By caching the app shell, repeated visits on the application were loading fast. To measure the performance of the app shell, we did some series of tests.</p>

        <b>Test 1: Using DevTools</b>
        <p>We emulated 3G connection in DevTools Network Panel. After this on the repeated visits, the application were loading within few <span className="highlight bold no--bg">milli seconds</span>.</p>
        
        <i><b>Screenshot:</b></i>

        <div className="offline__container">
          <img src={appShellRepeated} alt="devTools network panel" />
        </div>

        <b>Test 2: Using Webpagetest</b>
        <p>In webpagetest, we measured the same site in <span className="highlight bold no--bg">Chrome under 3G connection</span>. Load time for repeat visits were <span className="highlight bold no--bg">3.015s</span>.</p>
        
        <i><b>Screenshot:</b></i>
        <div className="offline__container">
          <img src={filmStrip} alt="web page test" />
        </div>

        <p>See the full result <a target="_blank" href="http://www.webpagetest.org/result/161021_1H_G6C/">here</a>.</p>

        <p>It is clear from the above results, using app shell made the application faster.</p>

        <h2>Applications using app shell in production</h2>
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
