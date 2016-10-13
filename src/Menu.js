import React, {Component} from 'react';
import NavLink from './NavLink';
import './Menu.css';

class Menu extends Component {
  render() {
    return(
      <div className="menu-container">
        <div className="menu">
          <ul className="menu__list">
            <li>
              <NavLink to="/" onlyActiveOnIndex={true}>
                <span className="menu__steps">1</span>
                Introduction
              </NavLink>
            </li>
            <li>
              <NavLink to="/setup">
                <span className="menu__steps">2</span>
                Setup
              </NavLink>
            </li>
            <li>
              <NavLink to="/pwa">
                <span className="menu__steps">3</span>
                Progressive Web Application
              </NavLink>
            </li>
            <li>
              <NavLink to="/serviceworker">
                <span className="menu__steps">4</span>
                Service Worker
              </NavLink>
            </li>
            <li>
              <NavLink to="/caching">
                <span className="menu__steps">5</span>
                Caching
              </NavLink>
            </li>
            <li>
              <NavLink to="/offline">
                <span className="menu__steps">6</span>
                Offline
              </NavLink>
            </li>
            <li>
              <NavLink to="/push">
                <span className="menu__steps">7</span>
                Push
              </NavLink>
            </li>
            <li>
              <NavLink to="/finish">
                <span className="menu__steps">8</span>
                Finish
              </NavLink>
            </li>
          </ul>
          <div className="menu__author">
            <a href="https://github.com/orgs/code-kotis/people?utf8=%E2%9C%93&query=%20role%3Aowner" target="_blank" rel="noopener">Authors</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
