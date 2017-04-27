import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';
import manifest from './manifest.png';

class AppLike extends Component {
  render() {
    const manifestJson = `{
  "name": "Application Name",
  "short_name": "App Name",
  "icons": [{
    "src": "./images/touch/android-chrome-144x144.png",
    "sizes": "144x144",
    "type": "image/png"
  }],
  "start_url": "./index.html?utm=homescreen",
  "theme_color": "#2196f3",
  "background_color": "#fff",
  "display": "standalone",
  "orientation": "portrait"
}`;

    return(
      <div className="introduction">
        <h1>Native App Like</h1>
        <p>Using <span className="highlight bold no--bg">web manifest</span>, we can bring the <span className="highlight bold no--bg">add to homescreen</span>, <span className="highlight bold no--bg">splash screen experience</span>. Add to homescreen gives us the ability to install the web application quickly without having to worry about the size of the application.</p>

        <p><span className="highlight bold no--bg">manifest.json</span> should contain the following criteria.</p>

        <ul>
          <li>Site should be in <span className="highlight bold no--bg">HTTPS</span>.</li>
          <li>Should have a <span className="highlight bold no--bg">registered service worker</span>.</li>
          <li>Should contain a <span className="highlight bold no--bg">name</span>, <span className="highlight bold no--bg">short_name</span> to display in banner and homescreen.</li>
          <li>Icon should be <span className="highlight bold no--bg">PNG</span> image and at least <span className="highlight bold no--bg">144px</span> in dimension.</li>
          <li><span className="highlight bold no--bg">Add to homescreen</span> banner will show when user should visits your site at least twice with some time intervals in between.</li>
        </ul>

        <Note>
          <p><span>Note: </span>Above listed criertia's will change over the time, for more info <a href="https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android#criteria-faq">Google Developers Site</a>.</p>
        </Note>

        <b>Sample Manifest</b>

        <Highlight lang="json" value={manifestJson} />

        <p>More about manifest in <a href="https://w3c.github.io/manifest/">W3C Specification</a>.</p>

        <h2>Web Manifest Support</h2>
        <p>Add to homescreen, splash screen are supported in <span className="highlight bold no--bg">Chrome</span>, <span className="highlight bold no--bg">Mozilla Firefox</span>, <span className="highlight bold no--bg">Opera</span> and <span className="highlight bold no--bg">Safari</span> as well.</p>

        <i><b>Screenshot:</b></i>

        <div className="offline__container">
          <img className="" src={manifest} alt="Manifest File" />
        </div>
      </div>
    );
  }
}

export default AppLike;
