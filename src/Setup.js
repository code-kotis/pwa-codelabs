import React, {Component} from 'react';
import Highlight from 'react-highlight.js';

class Setup extends Component {
  render() {
    return(
      <div>
        <h1>Setup</h1>
        <Highlight innerHTML={true} language={"javscript"}>
          var a = 1;
        </Highlight>
      </div>
    );
  }
}

export default Setup;
