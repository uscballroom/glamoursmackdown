import './Rules.css';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Rules extends Component {
  render() {
    return (
      <div className="Rules">
        <div className="container">
          <div className="Common-row">
            <div className="Common-title">PROFICIENCY LEVELS</div>
            <div className="Common-info">
              <p>
                The USC Glamour Smackdown is
                a <a href="http://www.collegiatedancesport.org/" target="_blank">Collegiate
                Dancesport Association</a> Affiliated Competition. We aim to
                provide a fun competition experience for all by observing
                the <a href="http://www.collegiatedancesport.org/fair-level-certification/" target="_blank">CDA
                Fair Level Certification</a> system (abbreviated <b>FLC</b>).
                We will not allow competitors to register below
                their <b>FLC</b> level for each event.
              </p>
              <p>
                These levels do not apply to <b>Nightclub</b> and <b>Performance
                Team</b> events. Scroll to the bottom of this page for rules
                regarding Nightclub and Performance Team events.
              </p>
              <p>
                Here are the available levels, from lowest to highest skill
                level:
              </p>
              <p>
                <ol>
                  <li><span>(Syllabus) <b>Newcomer</b></span></li>
                  <li><span>(Syllabus) <b>Bronze</b></span></li>
                  <li><span>(Syllabus) <b>Silver</b></span></li>
                  <li><span>(Syllabus) <b>Gold</b></span></li>
                  <li><span>(Open) <b>Novice</b></span></li>
                  <li><span>(Open) <b>Pre-Champ</b></span></li>
                  <li><span>(Open) <b>Champ</b></span></li>
                </ol>
              </p>
              <p>
                In each dance, competitors are allowed to register for two
                events, at consecutive levels &mdash; their own <b>FLC</b> level
                and one level higher. See the Examples section below.
              </p>
              <p>
                <b>FLC</b> levels are calculated based on a combination of
                honorable self-enforcement and your recorded performance at
                previous CDA-recognized competitions.
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">NEWCOMER</div>
            <div className="Common-info">
              <p>
                Couples may only register for events at
                the <b>Newcomer</b> level if both members have been
                partner-dancing for less than one year. Dance figures are
                limited to the Bronze syllabus level.
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">ROOKIE&nbsp;/&nbsp;VET</div>
            <div className="Common-info">
              <p>
                <b>Rookie/Veteran</b> events are designed to help new dancers gain
                experience by dancing with a partner who is at a higher
                skill level.
              </p>
              <p>
                <ul>
                  <li>
                    A <strong>Rookie</strong> may be anyone whose <b>FLC</b> level
                    is <b>Newcomer</b> or <b>Bronze</b>.
                  </li>
                  <li>
                    A <strong>Vet</strong> may be anyone whose <b>FLC</b> level
                    is <b>Silver</b> or higher.
                  </li>
                </ul>
              </p>
              <p>
                This means that, for each dance, if you're registered for
                Newcomer & Bronze events or Bronze & Silver events, you can
                be a rookie, and if you're registered for Silver & Gold
                events (or higher), you can be a vet.
              </p>
              <p>
                In Rookie/Vet events, dance figures are limited to the Bronze
                syllabus level.
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">EXAMPLES</div>
            <div className="Common-info">
              <p>
                For example:
              </p>
              <p>
                <ul><li>
                  If you have been ballroom dancing for less than one year
                  and your <b>FLC</b> level is still Newcomer, you may register
                  for <strong>Newcomer</strong> and <strong>Bronze</strong> levels.
                </li></ul>
                <ul><li>
                  If your <b>FLC</b> level for American Smooth Waltz
                  is <strong>Silver</strong>, you may register for the Syllabus
                  American Smooth Waltz <strong>Silver</strong> and <strong>Gold</strong> events.
                </li></ul>
                <ul><li>
                  If your <b>FLC</b> level for International Standard Tango
                  is <strong>Gold</strong>, you may register for the Syllabus
                  International Standard Tango <strong>Gold</strong> event and
                  the Open International Standard
                  Tango <strong>Novice</strong> event.
                </li></ul>
              </p>
              <p>
                See the <a href="http://www.collegiatedancesport.org/fair-level-certification/" target="_blank">CDA
                Fair Level Certification</a> site for a complete guide on allowable
                registration levels.
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">COSTUMES</div>
            <div className="Common-info">
              <p>
                At the <b>Newcomer</b>, <b>Bronze</b>, and <b>Silver</b> levels,
                the following costume elements are not allowed:
              </p>
              <p>
                <ul>
                  <li>Clothing with light effects, such as rhinestones, sequins, actual lights, etc.</li>
                  <li>Floats, streamers, or similar additions</li>
                  <li>Suit jackets</li>
                  <li>Shirts open below the bottom of the breast bone</li>
                  <li>Highly revealing attire</li>
                </ul>
              </p>
              <p>
                At these levels, costumes will be judged allowable or not by
                the invigilator. If you are unsure whether your attire is
                allowed, bring other options that you can change into at
                the competition, and <Link to="/contact">contact us</Link> to
                check beforehand.
              </p>
              <p>
                There are no costume restrictions at <b>Rookie/Vet</b> and
                at <b>Gold</b> and higher levels.
              </p>
              <p>
                You can still be glamourous in Newcomer, Bronze, and Silver!
                Jewelry and hair accessories, even if they contain light
                effects, are allowed at all levels. (Note that at all levels,
                the invigilator can still require competitors to remove
                specific accessories if deemed inappropriate for the
                competition.)
              </p>
              <p>
                Please wear dance shorts under your dress or skirt. Dance
                shorts must be a color other than nude.
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">INVIGILATION</div>
            <div className="Common-info">
              <p>
                For all <b>Syllabus Events</b> (Newcomer, Bronze, Silver, Gold,
                and Rookie/Vet), an invigilator will be present to ensure
                that competitors only perform dance figures appropriate for
                the level.
              </p>
              <p>
                All other events are open, meaning there is no restriction on the
                moves that competitors can do.
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">PHOTO&nbsp;/ VIDEO</div>
            <div className="Common-info">
              <p>
                Photography and videography is allowed. Our beautiful venue is
                the perfect backdrop for your glamourous dancing!
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">NIGHTCLUB</div>
            <div className="Common-info">
              <p>
                Nightclub events at the Glamour Smackdown have two
                levels: <b>Beginner</b> and <b>Non-Beginner</b>. At
                the <b>Beginner</b> level, both dancers in a couple must have
                been partner-dancing for less than two years. There is no
                restriction for registration in Nightclub events at
                the <b>Non-Beginner</b> level.
              </p>
              <p>
                There are no restrictions on dance figures in Nightclub events.
                Get creative!
              </p>
              <p>
                There are no costume restrictions for all Nightclub events.
                This is your chance to be especially glamourous!
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">PERFORMANCE TEAM</div>
            <div className="Common-info">
              <p>
                All performance teams compete at the same level. There are no
                registration, costume, or dance figure restrictions for
                the Performance Team event.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rules;
