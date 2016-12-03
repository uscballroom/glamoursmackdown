import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App';
import Home from './pages/Home';
import Events from './pages/Events';
import Prizes from './pages/Prizes';
import Contact from './pages/Contact';

import './index.css';
import 'bootstrap-css-only';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="events" component={Events}/>
      <Route path="prizes" component={Prizes}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
