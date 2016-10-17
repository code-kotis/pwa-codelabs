import React, {Component} from 'react';

class Note extends Component {
  render() {
    const {type} = this.props;
    return(
      <div className={"app__notes " + type}>
        {this.props.children}
      </div>
    );
  }
}

export default Note;
