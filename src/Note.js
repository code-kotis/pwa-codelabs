import React, {Component} from 'react';

class Note extends Component {
  render() {
    const {type} = this.props;
    const classNames = type ? type : "";
    return(
      <div className={"app__notes " + classNames}>
        {this.props.children}
      </div>
    );
  }
}

export default Note;
