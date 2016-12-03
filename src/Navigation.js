import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <div className="Navigation-list">
          <IndexLink to="/" className="Navigation-link" activeClassName="Navigation-active">
            Home
          </IndexLink>
          <Link to="/events" className="Navigation-link" activeClassName="Navigation-active">
            Events & Schedule
          </Link>
          <Link to="/prizes" className="Navigation-link" activeClassName="Navigation-active">
            Prizes
          </Link>
          <Link to="/contact" className="Navigation-link" activeClassName="Navigation-active">
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
