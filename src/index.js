import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Introduction from './Introduction';
import ServiceWorker from './ServiceWorker';
import PWA from './PWA';
import Caching from './Caching';
import Offline from './Offline';
import Push from './Push';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Introduction} />
      <Route path="/introduction" component={Introduction} />
      <Route path="/serviceworker" component={ServiceWorker} />
      <Route path="/pwa" component={PWA} />
      <Route path="/caching" component={Caching} />
      <Route path="/offline" component={Offline} />
      <Route path="/push" component={Push} />
    </Route>
  </Router>,
  document.getElementById('root')
);
