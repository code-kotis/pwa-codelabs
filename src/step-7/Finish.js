import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';
import Note from '../Note';

class Finish extends Component {
  render() {
    const surgeInstall = `$ npm install --global surge`;
    const finalDir = `$ cd final`;
    const surgeDeploy = `$ surge`;
    const surgeDeployHTTPS = `$ surge --domain https://my-project.surge.sh`;
    return(
      <div>
        <h1>Deploy</h1>
        <p>The final step of this codelabs is deploying our github cards with HTTPS server.</p>
        <h3>Follow the below steps.</h3>
        <p><span className="highlight bold no--bg">Step 1</span> - Install surge via npm.</p>
        <Highlight lang="bash" value={surgeInstall} />

        <p><span className="highlight bold no--bg">Step 2</span> - Go to <span className="highlight bold no--bg">final directory</span> in sample repository.</p>
        <Highlight lang="bash" value={finalDir} />

        <p><span className="highlight bold no--bg">Step 3</span> - Type the below command to deploy.</p>
        <Highlight lang="bash" value={surgeDeploy} />

        <p>After successful deployment, you will get an url in your terminal. Copy it and open in your desktop and mobile browsers :D</p>

        <h3>What next?</h3>
        <p>Everything is perfect, except the deployed site is loading in HTTP unless we change the url to HTTPS. So lets fix it by forcing HTTP to redirect to HTTPS.</p>

        <Highlight lang="bash" value={surgeDeployHTTPS} />

        <Note type="tips">
          <p><span>Tips: </span> <a href="https://chrome.google.com/webstore/detail/blipmdconlkpinefehnmjammfjpmpbjk" target="_blank">Lighthouse</a> analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices. Our application score was <span className="highlight bold no--bg">91/100</span>.</p>
        </Note>

        <p>Thats it all done!!</p>
      </div>
    );
  }
}

export default Finish;
