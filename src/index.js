import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Introduction from './step-1/Introduction';
import Setup from './step-2/Setup';
import PWA from './step-3/PWA';
import ServiceWorker from './step-4/ServiceWorker';
import Caching from './step-5/Caching';
import Offline from './step-6/Offline';
import Push from './step-7/Push';
import Finish from './step-8/Finish';
import './index.css';
import './syntax.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Introduction} />
      <Route path="/introduction" component={Introduction} />
      <Route path="/setup" component={Setup} />
      <Route path="/pwa" component={PWA} />
      <Route path="/serviceworker" component={ServiceWorker} />
      <Route path="/caching" component={Caching} />
      <Route path="/offline" component={Offline} />
      <Route path="/push" component={Push} />
      <Route path="/finish" component={Finish} />
    </Route>
  </Router>,
  document.getElementById('root')
);
