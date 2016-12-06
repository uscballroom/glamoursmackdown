import './Home.css';

import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-top-section">
          <div className="container">
            <div className="Home-row">
              <div className="Home-title">WHEN</div>
              <div className="Home-info">
                <p>
                  Saturday February 18, 2017
                </p>
              </div>
            </div>
            <div className="Home-row">
              <div className="Home-title">WHERE</div>
              <div className="Home-info">
                <p>
                  <strong>Tutor Campus Center Grand Ballroom</strong><br/>
                  University of Southern California<br/>
                  3607 Trousdale Pkwy<br/>
                  Los Angeles, CA 90089
                </p>
              </div>
            </div>
            <div className="Home-row">
              <div className="Home-title">WHAT</div>
              <div className="Home-info">
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
            <div className="Home-row">
              <div className="Home-title">ABOUT THE THEME</div>
              <div className="Home-info">
                <p>
                  Dancesport sits at the crossroads of two wildly different ideas.
                  It's elegant, but fierce; cordial, but cutthroat. Glamour Smackdown
                  is about maxing out these contrasts to give competitors the ultimate
                  dancesport experience.
                </p>
              </div>
            </div>
            <div className="Home-row">
              <div className="Home-title">REGISTRATION</div>
              <div className="Home-info">
                <p><strong>Registration Deadline: Friday,&nbsp;Feb.&nbsp;3,&nbsp;2017</strong></p>
                <p><a href="" className="Home-register-link" target="_blank">Register now</a></p>
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
