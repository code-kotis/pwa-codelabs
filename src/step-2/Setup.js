import React, {Component} from 'react';
import SyntaxHighlighter from '../SyntaxHighlighter';

class Setup extends Component {
  render() {
    const code = 'git clone https://github.com/code-kotis/pwa-codelabs.git';
    return(
      <div>
        <h1>2. Setup</h1>
        <p>To setup the codelabs, follow the below steps.</p>
        <p><b>Follow the steps</b></p>
        <p><i>1. Clone the repo via command line</i></p>
        <SyntaxHighlighter>
          <span className="bash">
            <span className="no--select space">$</span>{code}</span>
        </SyntaxHighlighter>

        <p><i>2. Download this chrome extention to run localhost server</i></p>
        <a className="btn" href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb" target="_blank">Install Web Server</a>
      </div>
    );
  }
}

export default Setup;
