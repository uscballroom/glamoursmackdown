import './App.css';

import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import heroImage from './images/logo.svg';

class App extends Component {
  render() {
    const expanded = (this.props.location.pathname === '/');
    return (
      <div className="App">
        <header className={'App-header' + (expanded ? ' App-header-expanded' : '')}>
          <div className="container">
            <img src={heroImage} alt="Glamour Smackdown" className="App-header-image"/>
          </div>
          <div className="container App-navigation-container">
            <div className="App-navigation-capsule">
              <nav className="App-navigation">
                <IndexLink to="/" className="App-navigation-link" activeClassName="App-navigation-active">
                  home
                </IndexLink>
                <Link to="/register" className="App-navigation-link" activeClassName="App-navigation-active">
                  register
                </Link>
                <Link to="/travel" className="App-navigation-link" activeClassName="App-navigation-active">
                  location&nbsp;&amp;&nbsp;travel
                </Link>
                <Link to="/events" className="App-navigation-link" activeClassName="App-navigation-active">
                  events&nbsp;&amp;&nbsp;schedule
                </Link>
                <Link to="/rules" className="App-navigation-link" activeClassName="App-navigation-active">
                  rules
                </Link>
                <Link to="/contact" className="App-navigation-link" activeClassName="App-navigation-active">
                  contact us
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="App-page">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
