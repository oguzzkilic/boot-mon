import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import Root from './Root';
import App from './App';
import NotFound from './Components/NotFound';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>, document.getElementById('root'))
