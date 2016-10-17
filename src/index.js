import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import App from './App';
import Introduction from './step-1/Introduction';
import Setup from './step-2/Setup';
import ServiceWorker from './step-3/ServiceWorker';
import Offline from './step-4/Offline';
import Push from './step-5/Push';
import BGSync from './step-6/BGSync';
import Finish from './step-7/Finish';
import PageNotFound from './PageNotFound';
import './index.css';
import './App.css';
import './syntax.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Introduction} />
      <IndexRedirect to="/introduction" />
      <Route path="/introduction" component={Introduction} />
      <Route path="/setup" component={Setup} />
      <Route path="/serviceworker" component={ServiceWorker} />
      <Route path="/offline" component={Offline} />
      <Route path="/push" component={Push} />
      <Route path="/bgsync" component={BGSync} />
      <Route path="/finish" component={Finish} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
