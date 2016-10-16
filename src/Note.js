import React, {Component} from 'react';

class Note extends Component {
  render() {
    return(
      <div className="app__notes">
        {this.props.children}
      </div>
    );
  }
}

export default Note;
