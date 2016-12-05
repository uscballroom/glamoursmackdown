import 'bootstrap-css-only';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App';
import Home from './pages/Home';
import Events from './pages/Events';
import Travel from './pages/Travel';
import Contact from './pages/Contact';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="events" component={Events}/>
      <Route path="travel" component={Travel}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
