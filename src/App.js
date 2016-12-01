import React, { Component } from 'react';

import Navigation from './Navigation';

import './App.css';

class App extends Component {
  render() {
    const expanded = (this.props.location.pathname === '/');
    return (
      <div className="App">
        <div className={'App-header' + (expanded ? ' App-header-expanded' : '')}>
          <h2>Glamour Smackdown</h2>
          <Navigation/>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
