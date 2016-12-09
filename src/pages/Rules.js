import './Rules.css';

import React, { Component } from 'react';

class Rules extends Component {
  render() {
    return (
      <div className="Rules">
        <div className="container">
        <div className="Common-row">
          <div className="Common-title">COMING SOON</div>
          <div className="Common-info">
            <p>
              Information about the Glamour Smackdown competition rules will be
              added here soon.
            </p>
            <p>
              Join the Glamour Smackdown <a href="https://www.facebook.com/events/142139819599212/" target="_blank">Facebook event</a> to
              receive updates when more information becomes available.
            </p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Rules;
