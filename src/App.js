import React, { Component } from 'react';
import { Match, Miss, Redirect } from 'react-router'
import Menu from './Menu';
import Header from './Header';
import Introduction from './step-1/Introduction';
import Setup from './step-2/Setup';
import AppShell from './step-3/AppShell';
import ServiceWorker from './step-4/ServiceWorker';
import Offline from './step-5/Offline';
import AppLike from './step-6/AppLike';
import Finish from './step-7/Finish';
import PageNotFound from './PageNotFound';
import GitHub from './GitHub.png';

class App extends Component {
  constructor() {
    super();
    this.callbackMenu = this.callbackMenu.bind(this);
    this.state = {
      showMenu: false
    };
  }

  callbackMenu() {
    this.setState({
      showMenu: true
    });
  }

  render() {
    const {showMenu} = this.state;
    return (
      <div className="app">
        <Menu isMenuOpen={showMenu}/>
        <Header callbackMenu={this.callbackMenu}/>
        <div className="app__container">
          <a className="app__source-link" title="Source" href="https://github.com/code-kotis/pwa-codelabs" target="_blank" rel="noopener">
            <img className="app__source" alt="Source" src={GitHub} />
          </a>

          <Match pattern="/" exactly render={() => <Redirect to="/introduction"/> }/>
          <Match pattern="/introduction" component={Introduction} />
          <Match pattern="/setup" component={Setup} />
          <Match pattern="/appshell" component={AppShell} />
          <Match pattern="/serviceworker" component={ServiceWorker} />
          <Match pattern="/offline" component={Offline} />
          <Match pattern="/applike" component={AppLike} />
          <Match pattern="/finish" component={Finish} />

          <Miss component={PageNotFound} />
        </div>
      </div>
    );
  }
}

export default App;
