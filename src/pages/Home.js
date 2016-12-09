import './Home.css';

import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Common-top-section">
          <div className="container">
            <div className="Common-row">
              <div className="Common-title">WHEN</div>
              <div className="Common-info">
                <p>
                  Saturday February 18, 2017
                </p>
              </div>
            </div>
            <div className="Common-row">
              <div className="Common-title">WHERE</div>
              <div className="Common-info">
                <p>
                  <strong>Tutor Campus Center Grand Ballroom</strong><br/>
                  University of Southern California<br/>
                  3607 Trousdale Pkwy<br/>
                  Los Angeles, CA 90089
                </p>
              </div>
            </div>
            <div className="Common-row">
              <div className="Common-title">WHAT</div>
              <div className="Common-info">
                <p>
                  The USC Glamour Smackdown is the most extravagant of all
                  collegiate ballroom dance competitions! Bring your boas,
                  bling, bow ties, and most importantly your best ballroom
                  dancing to amaze your adoring fans and knock out your
                  opponents!
                </p>
                <p>
                  Let the countdown to the smackdown begin!
                </p>
              </div>
            </div>
            <div className="Common-row">
              <div className="Common-title">ABOUT THE THEME</div>
              <div className="Common-info">
                <p>
                  Dancesport sits at the crossroads of two wildly different
                  ideas &mdash; it's flashy, but fierce; cordial, but
                  cutthroat. At the Glamour Smackdown, dancers come together
                  to experience intense competition but also the glamour,
                  beauty, and joy of ballroom dancing!
                </p>
              </div>
            </div>
            <div className="Common-row">
              <div className="Common-title">REGISTRATION</div>
              <div className="Common-info">
                <p><strong>Registration Deadline: Friday,&nbsp;Feb.&nbsp;3,&nbsp;2017</strong></p>
                <p className="Home-register-link">
                  Registration will be open soon! Join the Glamour Smackdown <a href="https://www.facebook.com/events/142139819599212/" target="_blank">Facebook event</a> to
                  receive an update when registration opens.
                </p>
                {/*<p><a href="" className="Home-register-link" target="_blank">Register now</a></p>*/}
                <p>
                  <strong>Registration Prices (per person)</strong>
                  <ul>
                    <li><b>$30</b> Unlimited event entries</li>
                    <li><b>$15</b> Nightclub and/or Performance Team events only</li>
                  </ul>
                </p>
                <p>
                  <strong>Spectator admission</strong>
                  <ul>
                    <li><b>$10</b> at the door</li>
                  </ul>
                </p>
                <p>
                  <strong>Late Registration</strong>
                  <ul>
                    <li>Late deadline: <b>Friday,&nbsp;Feb.&nbsp;10,&nbsp;2017</b></li>
                    <li><b>$40</b> Unlimited event entries</li>
                    <li><b>$20</b> Nightclub and/or Performance Team events only</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
