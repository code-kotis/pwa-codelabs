import React, { Component } from 'react';
import Menu from './Menu';
import './App.css';
import GitHub from './GitHub.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <div className="app__container">
          <a title="Source" href="https://github.com/code-kotis/pwa-codelabs" target="_blank" rel="noopener">
            <img className="app__source" alt="Source" src={GitHub} />
          </a>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
