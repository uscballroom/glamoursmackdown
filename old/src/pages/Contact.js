import './Contact.css';

import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="container">
          <section>
            <h1>FACEBOOK EVENT</h1>
            <div>
              <p>
                Join the <a href="https://www.facebook.com/events/142139819599212/" target="_blank">Glamour Smackdown event on Facebook</a> to receive updates
                and announcements leading up to the competition.
              </p>
            </div>
          </section>
          <section>
            <h1>CONTACT US</h1>
            <div>
              <p>
                Do not hesitate to contact us via email or Facebook message
                with any questions about the Glamour Smackdown!
              </p>
              <p>
                On the day of the competition, there will be phone numbers on
                this page which you can call if you have any questions at all.
              </p>
              <p>
                The USC Glamour Smackdown is hosted with love by the SC Ballroom Dance
                Team, the premiere ballroom dancing organization at USC.  To
                find out more about us, visit our website or Facebook page.
              </p>
            </div>
          </section>
          <section>
            <h1>EMAIL</h1>
            <div>
              <p>
                <a href="mailto:ballroomusc@gmail.com" target="_blank">ballroomusc@gmail.com</a>
              </p>
            </div>
          </section>
          <section>
            <h1>FACEBOOK</h1>
            <div>
              <p>
                <a href="https://www.facebook.com/USCBallroom/" target="_blank">SC Ballroom Dance Team Facebook page</a>
              </p>
            </div>
          </section>
          <section>
            <h1>SC&nbsp;BALLROOM WEBSITE</h1>
            <div>
              <p>
                <a href="http://uscballroom.org" target="_blank">uscballroom.org</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;
