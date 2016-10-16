import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
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
import './syntax.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/codelabs" component={App}>
      <IndexRoute component={Introduction} />
      <IndexRedirect to="/codelabs/introduction" />
      <Route path="/codelabs/introduction" component={Introduction} />
      <Route path="/codelabs/setup" component={Setup} />
      <Route path="/codelabs/serviceworker" component={ServiceWorker} />
      <Route path="/codelabs/offline" component={Offline} />
      <Route path="/codelabs/push" component={Push} />
      <Route path="/codelabs/bgsync" component={BGSync} />
      <Route path="/codelabs/finish" component={Finish} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </Router>,
  document.getElementById('root')
);
