import './App.css';

import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import heroImage from './images/gs.jpg';

class App extends Component {
  render() {
    const expanded = (this.props.location.pathname === '/');
    return (
      <div className="App">
        <div className={'App-header' + (expanded ? ' App-header-expanded' : '')}>
          <div className="container">
            <img src={heroImage} alt="Glamour Smackdown" className="App-header-image"/>
          </div>
          <nav className="App-navigation">
            <div className="container App-navigation-desktop">
              <IndexLink to="/" className="App-navigation-link" activeClassName="App-navigation-active">
                Home
              </IndexLink>
              <Link to="/events" className="App-navigation-link" activeClassName="App-navigation-active">
                Events&nbsp;&amp;&nbsp;Schedule
              </Link>
              <Link to="/travel" className="App-navigation-link" activeClassName="App-navigation-active">
                Travel&nbsp;&amp;&nbsp;Parking
              </Link>
              <Link to="/contact" className="App-navigation-link" activeClassName="App-navigation-active">
                Register
              </Link>
              <Link to="/contact" className="App-navigation-link" activeClassName="App-navigation-active">
                Rules
              </Link>
              <Link to="/contact" className="App-navigation-link" activeClassName="App-navigation-active">
                Contact
              </Link>
            </div>
            <div className="App-navigation-mobile">
            </div>
          </nav>
        </div>
        <div className="App-page">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
