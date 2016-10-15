import React, {Component} from 'react';

class Note extends Component {
  render() {
    const {heading, text} = this.props;
    return(
      <div className="app__notes">
        {
          heading && <h4>{heading}:</h4>
        }
        <span>{text}</span>
      </div>
    );
  }
}

export default Note;
