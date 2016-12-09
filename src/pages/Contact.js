import './Contact.css';

import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="container">
          <div className="Common-row">
            <div className="Common-title">FACEBOOK EVENT</div>
            <div className="Common-info">
              <p>
                Join the <a href="https://www.facebook.com/events/142139819599212/" target="_blank">Glamour Smackdown event on Facebook</a> to receive updates
                and announcements leading up to the competition.
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">CONTACT US</div>
            <div className="Common-info">
              <p>
                Do not hesitate to contact us via email or Facebook message
                with any questions about the Glamour Smackdown!
              </p>
              <p>
                The USC Glamour Smackdown is hosted with love by the SC Ballroom Dance
                Team, the premiere ballroom dancing organization at USC.  To
                find out more about us, visit our website or Facebook page.
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">EMAIL</div>
            <div className="Common-info">
              <p>
                <a href="mailto:ballroomusc@gmail.com" target="_blank">ballroomusc@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">FACEBOOK</div>
            <div className="Common-info">
              <p>
                <a href="https://www.facebook.com/USCBallroom/" target="_blank">SC Ballroom Dance Team Facebook page</a>
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">SC BALLROOM WEBSITE</div>
            <div className="Common-info">
              <p>
                <a href="http://uscballroom.org" target="_blank">uscballroom.org</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
