import React, {Component} from 'react';
import NavLink from './NavLink';
import './Menu.css';

class Menu extends Component {
  render() {
    return(
      <div className="menu-container">
        <div className="menu">
          <ul className="menu__list">
            <li><NavLink to="/" onlyActiveOnIndex={true}>Introduction</NavLink></li>
            <li><NavLink to="/setup">Setup</NavLink></li>
            <li><NavLink to="/pwa">Progressive Web Application</NavLink></li>
            <li><NavLink to="/serviceworker">Service Worker</NavLink></li>
            <li><NavLink to="/caching">Caching</NavLink></li>
            <li><NavLink to="/offline">Offline</NavLink></li>
            <li><NavLink to="/push">Push</NavLink></li>
          </ul>
        </div>
        <div className="menu__overlay" onClick={this.toggleMenu}></div>
      </div>
    );
  }
}

export default Menu;
