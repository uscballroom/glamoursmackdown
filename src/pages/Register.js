import './Register.css';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <div className="container">
          <section>
            <h1>DEADLINES &amp;&nbsp;PRICES</h1>
            <div>
              <p>
                <h3>Online Registration</h3>
                <ul>
                  <li>Deadline: <b>Friday&nbsp;Feb.&nbsp;3,&nbsp;2017</b></li>
                  <li><b>$30</b> Unlimited event entries</li>
                  <li><b>$15</b> Nightclub and/or Performance Team events only</li>
                </ul>
              </p>
              <p>
                <h3>Late Online Registration</h3>
                <ul>
                  <li>Late Deadline: <b>Friday&nbsp;Feb.&nbsp;10,&nbsp;2017</b></li>
                  <li><b>$40</b> Unlimited event entries</li>
                  <li><b>$20</b> Nightclub and/or Performance Team events only</li>
                </ul>
              </p>
              <p>
                <h3>Late Registration at the Door</h3>
                  At the door, you may only register for events whose first
                  round has space available &mdash; for instance, if an event's
                  semi-final round is full, we cannot create a quarter-final
                  for that event to accommodate more competitors.
                <ul>
                  <li><b>$40</b> Unlimited event entries</li>
                  <li><b>$20</b> Nightclub and/or Performance Team events only</li>
                </ul>
              </p>
            </div>
          </section>
          <section>
            <h1>ONLINE REGISTRATION INSTRUCTIONS</h1>
            <div>
              <p><ol>
                <li><div>
                  <h3>Fill out the online form with your partner</h3>
                  <p>
                    Review the <Link to="/rules">rules</Link> about Proficiency
                    Levels and registration restrictions.
                  </p>
                  <p><a href="https://goo.gl/forms/qMU6I9SvCDd4Z1Gs2" target="_blank">
                    Click here to fill out the online registration form.
                  </a></p>
                  <p>
                    In order to register at the normal registration price, you
                    must fill out the online form
                    by <b>Friday&nbsp;Feb.&nbsp;3,&nbsp;2017</b>.
                  </p>
                  <p>
                    After the late
                    deadline, <b>Friday&nbsp;Feb.&nbsp;10,&nbsp;2017</b>,
                    online registration will close and you may still register
                    at the door for events that have spaces available.
                  </p>
                  <p>
                    If you are competing with multiple partners for different
                    events, fully fill out the form for each partnership.
                  </p>
                </div></li>
                <li><div>
                  <h3>Submit your payment by mail</h3>
                  <p>
                    <ul>
                      <li>
                        If you register at the normal registration price,
                        your payment must be postmarked
                        by <b>Friday&nbsp;Feb.&nbsp;3,&nbsp;2017</b>.
                      </li>
                      <li>
                        If you register at the late registration price,
                        you must either mail your payment (postmarked
                        by <b>Friday&nbsp;Feb.&nbsp;10,&nbsp;2017</b>) or pay
                        at the door.
                      </li>
                    </ul>
                  </p>
                  <p>
                    We accept checks made out to:
                    <h3>SC Ballroom and Latin Dance Team</h3>
                  </p>
                  <p>
                    Mail your payment to:
                    <h3>SC Ballroom and Latin Dance Team</h3>
                    Some Office at USC<br/>
                    Los Angeles, CA 90007
                  </p>
                  <p>
                    Enclose the name and school/team affiliation of each person
                    you're paying for.
                  </p>
                  <p>
                    For group payments, print
                    the <a href="/register" target="_blank">Group Payment Form</a> and
                    enclose it with your payment. Even for group payments,
                    each couple must fill out an online registration form.
                  </p>
                </div></li>
              </ol></p>
            </div>
          </section>
          <section>
            <h1>PERFORMANCE TEAM REGISTRATION</h1>
            <div>
              <h3>Performance Team Members:</h3>
              <p>
                Your team manager will register you for the Performance Team
                event. You still must fill out an online form to register for
                any other Glamour Smackdown events. Either you or your team
                manager must pay for your registration. Be sure to pay the
                appropriate registration price, as specified at the top of
                this page.
              </p>
              <h3>Performance Team Managers:</h3>
              <p>
                Print and fill out
                the <a href="/register" target="_blank">Performance Team
                Registration Form</a>.
              </p>
              <p>
                For each participant in your performance team:
                <ul>
                  <li>
                    If they are only competing in performance teams, they do not
                    need to fill out their own registration form, and you must
                    submit $15 ($20 if late) for their registration.
                  </li>
                  <li>
                    If they are registering for other events at Glamour
                    Smackdown, they still must fill out their own online
                    registration form, and either you or they must pay the
                    appropriate registration price, as specified at the top of
                    this page.
                  </li>
                </ul>
              </p>
              <p>
                Mail the filled out Performance Team Registration Form along
                with team member payments to:
                <h3>SC Ballroom and Latin Dance Team</h3>
                Some Office at USC<br/>
                Los Angeles, CA 90007
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Register;
