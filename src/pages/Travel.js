import './Travel.css';

import React, { Component } from 'react';

import panelButton from '../images/map_panel_button_example.png';

class Travel extends Component {
  render() {
    return (
      <div className="Travel">
        <div className="container">
          <div className="Common-row">
            <div className="Common-title">COMPETITION LOCATION</div>
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
            <div className="Common-title">CAMPUS HOURS</div>
            <div className="Common-info">
              <p>
                Only USC students can enter campus after 9pm and before 6am.
              </p>
              <p>
                If you need to enter campus outside of these hours,
                email <a href="mailto:ballroomusc@gmail.com" target="_blank">
                ballroomusc@gmail.com</a> before the day of the competition
                to be placed on the guest list. If you aren't on the guest list
                and need to enter campus outside these hours on the weekend of
                the competition, check back here for a phone number to call.
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">PARKING</div>
            <div className="Common-info">
              <p><ul><li>
                Recommended closest on-campus parking:<br/>
                <strong>Parking Structure X</strong><br/>
                699 USC McCarthy Way<br/>
                Los Angeles, CA 90089
              </li></ul></p>
              <p><ul><li>
                Alternate on-campus parking (if you require an elevator):<br/>
                <strong>Parking Structure A</strong><br/>
                3667 McClintock Avenue<br/>
                Los Angeles, CA 90089
              </li></ul></p>
              <p>Parking on campus at USC costs $12 for the whole day.  To
              purchase parking, drive to the parking kiosk when you enter
              campus.</p>
              <p>Metered street parking near campus may be available but is
              mostly limited due to construction.</p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">PUBLIC TRANSIT</div>
            <div className="Common-info">
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
          </div>
          <div className="Common-row">
            <div className="Common-title">HOTELS</div>
            <div className="Common-info">
              <p>
                We recommend these hotels near campus:
              </p>
              <p><ul><li>
                <p>
                  <strong>Radisson Hotel Los Angeles Midtown at USC</strong><br/>
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
                  <strong>Vagabond Inn</strong><br/>
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
          </div>
          <div className="Common-row">
            <div className="Common-title">FOOD & DRINK</div>
            <div className="Common-info">
              <p>
                We recommend 6 fast-food & drink locations near Glamour
                Smackdown. See the map below for their locations. Open
                hours for the day of the competition are shown for the
                on-campus locations (#1-3).
              </p>
              <p>
                <strong>#1</strong> Tutor Campus Center
                <ul>
                  <li>Coffee Bean & Tea Leaf&nbsp;&nbsp; <b>(open 9am-3pm)</b></li>
                  <li>California Pizza Kitchen&nbsp;&nbsp; <b>(open 11am-3pm)</b></li>
                  <li>The Habit Burger&nbsp;&nbsp; <b>(open 11am-5pm)</b></li>
                  <li>Seeds&nbsp;&nbsp; <b>(open 9am-2pm)</b></li>
                </ul>
              </p>
              <p>
                <strong>#2</strong> Trojan Grounds at Birnkrant Resident Hall
                <ul>
                  <li>Starbucks&nbsp;&nbsp; <b>(open 24hr)</b></li>
                </ul>
              </p>
              <p>
                <strong>#3</strong> Ground Zero Coffee House, behind Trojan Resident Hall
                <ul>
                  <li>Great milkshakes, coffee, and tea
                  drinks&nbsp;&nbsp; <b>(open 1pm-8pm)</b></li>
                </ul>
              </p>
              <p>
                <strong>#4</strong> Gateway apartment building
                <ul>
                  <li>Dog Haus</li>
                  <li>Blaze Pizza</li>
                  <li>Subway</li>
                  <li>Yogurtland</li>
                  <li>Cream</li>
                </ul>
              </p>
              <p>
                <strong>#5</strong> Icon Plaza apartment building
                <ul>
                  <li>Starbucks</li>
                  <li>Pizza Studio</li>
                  <li>Which Wich</li>
                </ul>
              </p>
              <p>
                <strong>#6</strong> Tuscany apartment building
                <ul>
                  <li>Coffee Bean & Tea Leaf</li>
                  <li>Chipotle</li>
                  <li>Chick-fil-A</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">MAP</div>
            <div className="Common-info">
              <p>
                See the map below
                or <a href="https://www.google.com/maps/d/viewer?mid=1Cg8r9s4puVE56pdnPAodHcH2CwM" target="_blank">
                  view it externally
                </a> for walking directions and food locations.
              </p>
              <p>
                Click the Side Panel button <img src={panelButton} role="presentation"/> to show
                directions from hotels, transit, and parking.
              </p>
            </div>
          </div>
          <div className="Travel-map-capsule">
            <iframe
              className="Travel-map"
              src="https://www.google.com/maps/d/embed?mid=1Cg8r9s4puVE56pdnPAodHcH2CwM"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Travel;
