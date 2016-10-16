import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Introduction from './step-1/Introduction';
import Setup from './step-2/Setup';
import ServiceWorker from './step-3/ServiceWorker';
import Offline from './step-4/Offline';
import Push from './step-5/Push';
import BGSync from './step-6/BGSync';
import Finish from './step-7/Finish';
import './index.css';
import './syntax.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/codelabs" component={App}>
      <IndexRoute component={Introduction} />
      <Route path="/introduction" component={Introduction} />
      <Route path="/setup" component={Setup} />
      <Route path="/serviceworker" component={ServiceWorker} />
      <Route path="/offline" component={Offline} />
      <Route path="/push" component={Push} />
      <Route path="/bgsync" component={BGSync} />
      <Route path="/finish" component={Finish} />
    </Route>
  </Router>,
  document.getElementById('root')
);
