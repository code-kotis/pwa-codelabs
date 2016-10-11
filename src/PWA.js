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
          <li>Add to homescreen.</li>
          <li>Mobile friendly.</li>
          <li>Works across the devices and browsers.</li>
        </ul>
      </div>
    );
  }
}

export default PWA;
