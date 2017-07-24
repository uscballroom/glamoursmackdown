import 'bootstrap-css-only';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App';
import Home from './pages/Home';
import Register from './pages/Register';
import Travel from './pages/Travel';
import Events from './pages/Events';
import Rules from './pages/Rules';
import Contact from './pages/Contact';


const _scrollToTop = () => {
  var currentScrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScrollPosition > 0) {
    window.requestAnimationFrame(_scrollToTop);
    window.scrollTo(0, currentScrollPosition - (currentScrollPosition/5));
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} onChange={_scrollToTop}>
      <IndexRoute component={Home}/>
      <Route path="register" component={Register}/>
      <Route path="travel" component={Travel}/>
      <Route path="events" component={Events}/>
      <Route path="rules" component={Rules}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
