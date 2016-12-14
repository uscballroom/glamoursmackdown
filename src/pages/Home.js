import './Home.css';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Common-top-section">
          <div className="container">
            <section>
              <h1>WHEN</h1>
              <div>
                <p>
                  <h3>Saturday&nbsp;February&nbsp;18,&nbsp;2017</h3>
                  <div className="Home-time-row">
                    <div className="Home-time-col">8:00am&nbsp;&nbsp;&nbsp;doors open</div>
                    <div className="Home-time-col">9:00am&nbsp;&nbsp;&nbsp;dancing starts</div>
                  </div>
                </p>
              </div>
            </section>
            <section>
              <h1>WHERE</h1>
              <div>
                <p>
                  <h3>Tutor Campus Center Grand Ballroom</h3>
                  University of Southern California<br/>
                  3607 Trousdale Pkwy<br/>
                  Los Angeles, CA 90089
                </p>
              </div>
            </section>
            <section>
              <h1>WHAT</h1>
              <div>
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
            </section>
            <section>
              <h1>ABOUT THE THEME</h1>
              <div>
                <p>
                  Dancesport is both flashy and fierce, both cordial and
                  cutthroat. At the Glamour Smackdown, dancers come together
                  to experience intense competition but also the glamour,
                  beauty, and joy of ballroom dancing!
                </p>
              </div>
            </section>
            <section>
              <h1>REGISTRATION</h1>
              <div>
                <h2>Registration Deadline: Friday&nbsp;Feb.&nbsp;3,&nbsp;2017</h2>
                <p><Link to="/register" className="Home-register-link">Register now</Link></p>
                <p>
                  <h3>Registration Prices (per person)</h3>
                  <ul>
                    <li><b>$30</b> Unlimited event entries</li>
                    <li><b>$15</b> Nightclub and/or Performance Team events only</li>
                  </ul>
                </p>
                <p>
                  <h3>Spectator admission</h3>
                  <ul>
                    <li><b>$10</b> at the door</li>
                  </ul>
                </p>
                <p>
                  <h3>Late Registration</h3>
                  <ul>
                    <li>Late deadline: <b>Friday&nbsp;Feb.&nbsp;10,&nbsp;2017</b></li>
                    <li><b>$40</b> Unlimited event entries</li>
                    <li><b>$20</b> Nightclub and/or Performance Team events only</li>
                  </ul>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
