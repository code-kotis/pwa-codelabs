import React, {Component} from 'react';

class Header extends Component {
  render() {
    const {callbackMenu} = this.props;
    return(
      <header className="app__header">
        <div className="menu__icon" onClick={callbackMenu}>
          <svg width="24px" height="24px" viewBox="0 0 48 48" fill="#fff">
            <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"></path>
          </svg>
        </div>
        <h3>Codelabs</h3>
      </header>
    );
  }
}

export default Header;
