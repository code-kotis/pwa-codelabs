import React, {Component} from 'react';

class PWA extends Component {
  render() {
    return(
      <div className="pwa">
        <h1>Progressive Web Application</h1>
        <p>So, what are progressive web applications ?</p>
        <ul>
          <li>Loads instantly regardless of network.</li>
          <li>Secure, https by default.</li>
          <li>Works when offline.</li>
          <li>Add to homescreen, Splash screen.</li>
          <li>Mobile friendly.</li>
          <li>Works across the devices and browsers.</li>
        </ul>

        <p><b>Examples:</b></p>
        <ul className="disc">
          <li><a href="https://airhorner.com/" target="_blank" rel="noopener">Air horner</a></li>
          <li><a href="https://qrcodescan.in" target="_blank" rel="noopener">QR Code scanner</a></li>
          <li><a href="https://jsfeatures.in" target="_blank" rel="noopener">JS Features</a></li>
          <li><a href="http://demopwa.in" target="_blank" rel="noopener">Demo PWA</a></li>
        </ul>
      </div>
    );
  }
}

export default PWA;
