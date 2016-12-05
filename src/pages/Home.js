import './Home.css';

import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-top-section">
          <div className="container">
            <div className="Home-row">
              <p className="Home-heading">DATE</p>
              <p className="Home-info">Saturday February 18, 2017</p>
            </div>
            <p className="Home-heading">LOCATION</p>
            <p className="Home-info">Tutor Campus Center Grand Ballroom at the University of Southern California</p>
            <p className="Home-heading">WHAT?</p>
            <p>
              The USC Glamour Smackdown is the most extravagant of all collegiate dancesport
              competitions! Bring your boas, bling, bow ties, and most importantly
              your best ballroom dancing to knock out your opponents!
            </p>
            <p>
              Let the countdown to the smackdown begin!
            </p>
            <p>
              About the theme: Dancesport sits at the crossroads of two wildly different ideas.
              It's elegant, but fierce; cordial, but cutthroat. Glamour Smackdown
              is about maxing out these contrasts to give competitors the ultimate
              dancesport experience.
            </p>
          </div>
        </div>
        <div className="container">
          <div>
            <h2>Registration Deadline: Friday,&nbsp;Feb.&nbsp;3,&nbsp;2017</h2>
            <h2>Registration Price</h2>
            <h4>All events: $30</h4>
            <h4>Nightclub and/or Team Performance events only: $15</h4>
            <h2>Spectator Admission&nbsp;Price</h2>
            <h4>$10</h4>
            <h2>Late Registration</h2>
            <h4>Late Registration Deadline: Friday,&nbsp;Feb.&nbsp;10,&nbsp;2017</h4>
            <h4>Late Registration Price:</h4>
            <p>All events: $40</p>
            <p>Nightclub and/or Team Performance: $20</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
