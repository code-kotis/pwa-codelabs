import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';

class Setup extends Component {
  render() {
    const gitClone = '$ git clone -b sample https://github.com/code-kotis/pwa-codelabs.git';
    const installDependencies = '$ npm install';
    const runProject = '$ npm run server';
    const openProject = 'http://127.0.0.1:8000';
    return(
      <div className="setup">
        <h1>2. Setup</h1>
        <p>To setup the codelabs, follow the below steps.</p>
        <h2>Steps</h2>
        <ul className="setup__steps">
          <li>Clone the repository via command line.</li>
          
          <Highlight lang="bash" value={gitClone} />
          
          <li>If you don't have nodeJS installed in your system. Download and install it from below link.</li>
          
          <a className="btn" href="https://nodejs.org/en/download/" target="_blank">Download Node</a>

          <li>Install the dependencies.</li>
          
          <Highlight lang="bash" value={installDependencies} />

          <li>To run the sample code, type below command in your terminal.</li>
          
          <Highlight lang="bash" value={runProject} />

          <li>Open the localhost server url in your browser.</li>
          
          <Highlight lang="bash" value={openProject} />
        </ul>

        <p>That's it. Setup is done.</p>
      </div>
    );
  }
}

export default Setup;
