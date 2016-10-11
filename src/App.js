import React, { Component } from 'react';
import Menu from './Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <div className="app__container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
