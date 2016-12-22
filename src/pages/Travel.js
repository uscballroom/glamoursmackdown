import './Travel.css';

import React, { Component } from 'react';

// import panelButton from '../images/map_panel_button_example.png';

class Travel extends Component {
  render() {
    return (
      <div className="Travel">
        <div className="container">
          <section>
            <h1>COMPETITION LOCATION</h1>
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
            <h1>CAMPUS HOURS</h1>
            <div>
              <p>
                USC is a private campus, and the entrances are monitored during
                night hours, after <b>9pm</b> and before <b>6am</b>. If you
                intend to enter campus during night hours,
                email <a href="mailto:ballroomusc@gmail.com" target="_blank">
                ballroomusc@gmail.com</a> by <b>Thursday&nbsp;February&nbsp;16</b> to
                be placed on the night-hours guest list.
              </p>
              <p>
                If you haven't done this by Thursday February 16, and need
                to enter campus during night hours, check back here for a
                phone number to call on the day of the competition.
              </p>
            </div>
          </section>
          <section>
            <h1>PARKING</h1>
            <div>
              <p><ul><li>
                Recommended closest on-campus parking:<br/>
                <h3>Parking Structure X</h3>
                699 USC McCarthy Way<br/>
                Los Angeles, CA 90089
              </li></ul></p>
              <p><ul><li>
                Alternate on-campus parking (if you require an elevator):<br/>
                <h3>Parking Structure A</h3>
                3667 McClintock Avenue<br/>
                Los Angeles, CA 90089
              </li></ul></p>
              <p>
                Parking on campus at USC costs $12 for the whole day. To
                purchase parking, drive up to the parking kiosk as you
                enter campus and speak to the attendant. (There is a
                kiosk at every campus entrance.)<br/>
                Metered street parking near campus may be available but is
                mostly limited due to construction.
              </p>
            </div>
          </section>
          <section>
            <h1>PUBLIC TRANSIT</h1>
            <div>
              <p>
                Take the Metro <strong>Expo Line</strong> train to
                the <strong>Expo Park/USC</strong> station and cross the street
                northward onto campus.
              </p>
              <p>
                The Expo Line extends from Santa Monica to Downtown LA at the
                7th Street Metro Center station.  From the Metro Center station
                you can get to Union Station via the Red or Purple lines.
              </p>
            </div>
          </section>
          <section>
            <h1>HOTELS</h1>
            <div>
              <p>
                We recommend these hotels near campus:
              </p>
              <p><ul><li>
                <p>
                  <h3>Radisson Hotel Los Angeles Midtown at USC</h3>
                  3540 South Figueroa Street<br/>
                  Los Angeles, CA 90007<br/>
                  <a href="https://www.radisson.com/los-angeles-hotel-ca-90007/cafiguer" target="_blank">
                    hotel website
                  </a>
                </p>
                <p>
                  This hotel is across the street from campus and near vendors
                  such as Starbucks, Pizza Studio, Chipotle, and Chick-fil-A.
                </p>
              </li></ul></p>
              <p><ul><li>
                <p>
                  <h3>Vagabond Inn</h3>
                  3101 South Figueroa Street<br/>
                  Los Angeles, CA 90007<br/>
                  <a href="http://www.vagabondinn.com/vagabond-inn-los-angeles-at-usc" target="_blank">
                    hotel website
                  </a>
                </p>
                <p>
                  A less expensive option, this hotel is one block away from
                  campus, on the busy Figeroa street, and near restaurants
                  such as Blaze Pizza and Dog Haus.
                </p>
              </li></ul></p>
            </div>
          </section>
          <section>
            <h1>FOOD & DRINK</h1>
            <div>
              <p>
                We recommend these 6 fast-food, dessert, and café options
                near Glamour Smackdown. See the map below for their locations.
                Open hours for the day of the competition are shown for the
                on-campus options (#1-3).
              </p>
              <p>
                <strong>#1 Tutor Campus Center</strong>
                <ul>
                  <li>Coffee Bean & Tea Leaf&nbsp;&nbsp; <b>(open 9am-3pm)</b></li>
                  <li>California Pizza Kitchen&nbsp;&nbsp; <b>(open 11am-3pm)</b></li>
                  <li>The Habit Burger&nbsp;&nbsp; <b>(open 11am-5pm)</b></li>
                  <li>Seeds&nbsp;&nbsp; <b>(open 9am-2pm)</b></li>
                </ul>
              </p>
              <p>
                <strong>#2 Trojan Grounds</strong> (at Birnkrant Resident Hall)
                <ul>
                  <li>Starbucks&nbsp;&nbsp; <b>(open 24hr)</b></li>
                </ul>
              </p>
              <p>
                <strong>#3 Ground Zero Cafe</strong> (behind Trojan Resident Hall)
                <ul>
                  <li>highly recommended milkshakes, coffee, and tea
                  drinks&nbsp;&nbsp; <b>(open 1pm-8pm)</b></li>
                </ul>
              </p>
              <p>
                <strong>#4 Gateway apartment building</strong>
                <ul>
                  <li>Blaze Pizza</li>
                  <li>Subway</li>
                  <li>Dog Haus</li>
                  <li>Yogurtland</li>
                  <li>Cream</li>
                </ul>
              </p>
              <p>
                <strong>#5 Icon Plaza apartment building</strong>
                <ul>
                  <li>Starbucks</li>
                  <li>Pizza Studio</li>
                  <li>Which Wich</li>
                </ul>
              </p>
              <p>
                <strong>#6 Tuscany apartment building</strong>
                <ul>
                  <li>Coffee Bean & Tea Leaf</li>
                  <li>Chipotle</li>
                  <li>Chick-fil-A</li>
                  <li>California Gogi Korean Grill</li>
                  <li>AhiPoki Bowl</li>
                  <li>Cold Stone Creamery</li>
                </ul>
              </p>
            </div>
          </section>
          <section>
            <h1>MAP</h1>
            <div>
              <p>
                <a href="https://www.google.com/maps/d/viewer?mid=1Cg8r9s4puVE56pdnPAodHcH2CwM" target="_blank">
                  Click here to view our map with walking directions and food & drink locations.
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
  // <div className="Travel-map-capsule">
  //   <iframe
  //     className="Travel-map"
  //     src="https://www.google.com/maps/d/embed?mid=1Cg8r9s4puVE56pdnPAodHcH2CwM"
  //   />
  // </div>
}

export default Travel;
