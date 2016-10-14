import React, {Component} from 'react'

class SyntaxHighlighter extends Component {
  render() {
    return(
      <div className="hl">
        {this.props.children}
      </div>
    );
  }
}

export default SyntaxHighlighter;
