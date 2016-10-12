import React, {Component} from 'react';

class Introduction extends Component {
  render() {
    return(
      <div>
        <h1>Introduction</h1>
        <p>In this codelabs, you will be learning what is a Progressive Web Application and how it works and how to build one.</p>
        <p className="mtop30"><b>Things you will learn</b></p>
        <ul>
          <li>What is a progressive web application.</li>
          <li>Service worker lifecycle.</li>
          <li>How to cache the resources.</li>
          <li>Offline.</li>
          <li>Push notifications.</li>
        </ul>
      </div>
    );
  }
}

export default Introduction;
