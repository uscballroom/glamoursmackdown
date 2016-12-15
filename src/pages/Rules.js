import './Rules.css';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Rules extends Component {
  render() {
    return (
      <div className="Rules">
        <div className="container">
          <section>
            <h1>PROFICIENCY LEVELS</h1>
            <div>
              <p>
                The USC Glamour Smackdown is
                a <a href="http://www.collegiatedancesport.org/" target="_blank">Collegiate&nbsp;Dancesport&nbsp;Association</a>&nbsp;(CDA)
                Affiliated Competition. We aim to provide a fun competition
                experience for all by observing
                the <a href="http://www.collegiatedancesport.org/fair-level-certification/" target="_blank">CDA&nbsp;Fair&nbsp;Level&nbsp;Certification</a> system.
                Competitors may not register below their Proficiency Level
                for each event.
              </p>
              <p>
                Proficiency levels are calculated based on a combination of
                honorable self-enforcement and your recorded performance at
                previous CDA-recognized competitions. Visit
                the <a href="http://www.collegiatedancesport.org/fair-level-certification/" target="_blank">CDA&nbsp;Fair&nbsp;Level&nbsp;Certification</a> site
                to see how your Proficiency Level is calculated.
              </p>
              <p>
                These levels do not apply to <b>Nightclub</b> and <b>Performance
                Team</b> events. Scroll to the bottom of this page for rules
                regarding Nightclub and Performance Team.
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
                events, at consecutive levels &mdash; their own Proficiency Level
                and one level higher. See the Examples section below.
              </p>
            </div>
          </section>
          <section>
            <h1>NEW COMPETITORS</h1>
            <div>
              <p>
                If this is your first competition, calculate your Proficiency
                Level like this:
              </p>
              <p>
                <ul>
                  <li>
                    If both you and your partner have been partner-dancing
                    (including social dancing) for less than one year, your
                    level is <strong>Newcomer</strong>.
                  </li>
                  <li>
                    If you or your partner has more than one year of
                    partner-dancing experience, ask other members of your
                    dance organization
                    or <Link to="/contact">contact us</Link> and we'll help
                    you decide what level to register at!
                  </li>
                </ul>
              </p>
              <p>
                The 1-year rule for Newcomer applies to <b>both</b> members of
                every couple. Dance figures are limited to the Bronze syllabus
                level.
              </p>
            </div>
          </section>
          <section>
            <h1>ROOKIE&nbsp;/&nbsp;VET</h1>
            <div>
              <p>
                <b>Rookie/Veteran</b> events are designed to help new dancers gain
                experience by dancing with a partner who is at a higher level.
              </p>
              <p>
                <ul>
                  <li>
                    A <strong>Rookie</strong> may be anyone whose Proficiency Level
                    is <b>Newcomer</b> or <b>Bronze</b>.
                  </li>
                  <li>
                    A <strong>Vet</strong> may be anyone whose Proficiency Level
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
          </section>
          <section>
            <h1>EXAMPLES</h1>
            <div>
              <p>
                For example:
              </p>
              <p>
                <ul><li>
                  If you have been ballroom dancing for less than one year
                  and your Proficiency Level is still Newcomer, you may register
                  for <strong>Newcomer</strong> and <strong>Bronze</strong> levels.
                </li></ul>
                <ul><li>
                  If your Proficiency Level for American Smooth Waltz
                  is <strong>Silver</strong>, you may register for the Syllabus
                  American Smooth Waltz <strong>Silver</strong> and <strong>Gold</strong> events.
                </li></ul>
                <ul><li>
                  If your Proficiency Level for International Standard Tango
                  is <strong>Gold</strong>, you may register for the Syllabus
                  International Standard Tango <strong>Gold</strong> event and
                  the Open International Standard
                  Tango <strong>Novice</strong> event.
                </li></ul>
              </p>
              <p>
                See the <a href="http://www.collegiatedancesport.org/fair-level-certification/" target="_blank">CDA&nbsp;Fair&nbsp;Level&nbsp;Certification</a> site
                for more examples and a complete guide on allowable
                registration levels.
              </p>
            </div>
          </section>
          <section>
            <h1>INVIGILATION</h1>
            <div>
              <p>
                All <b>Syllabus Events</b> (Newcomer, Bronze, Silver, Gold,
                and Rookie/Vet) will be invigilated. We will be using either
                NDCA or USA Dance syllabus rules (check back here for
                updates).
              </p>
              <p>
                Dance figures outside of our syllabus rules may be allowed but
                you should <Link to="/contact">contact us</Link> to check
                whether a particular dance figure will be allowed by our
                invigilator.
              </p>
              <p>
                All other events are open, meaning there is no restriction on
                the dance figures that competitors can do. However, in all
                events lifts and drops are not allowed.
              </p>
            </div>
          </section>
          <section>
            <h1>ATTIRE RULES</h1>
            <div>
              <p>
                Heel protectors are required while on the dance floor. There
                will be heel protectors available for purchase on the day of
                the competition at the registration table.
              </p>
              <p>
                Please wear dance shorts under your dress or skirt. Dance
                shorts must be a color other than nude.
              </p>
            </div>
          </section>
          <section>
            <h1>COSTUMES</h1>
            <div>
              <p>
                In <b>Newcomer</b>, <b>Bronze</b>, and <b>Silver</b> events,
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
                Costumes will be judged allowable or not by the invigilator.
                If you are unsure whether your attire is allowed, bring
                other options to change into at the competition, and you
                can <Link to="/contact">contact us</Link> to check beforehand.
              </p>
              <p>
                There are no costume restrictions in <b>Rookie/Vet</b> and
                in <b>Gold</b> and higher levels. (You still must follow
                the <b>Attire Rules</b>, listed above.)
              </p>
              <p>
                You can still be glamourous in Newcomer, Bronze, and Silver!
                Jewelry and hair accessories, even if they contain light
                effects, are allowed at all levels. (Note that at all levels,
                the invigilator can still require competitors to remove
                specific accessories if deemed inappropriate for the
                competition.)
              </p>
            </div>
          </section>
          <section>
            <h1>PHOTO&nbsp;& VIDEO</h1>
            <div>
              <p>
                Photography and videography are allowed. Our beautiful venue is
                the perfect backdrop for your glamourous dancing!
              </p>
            </div>
          </section>
          <section>
            <h1>NIGHTCLUB</h1>
            <div>
              <p>
                Nightclub events at the Glamour Smackdown have two
                levels: <b>Beginner</b> and <b>Non-Beginner</b>.
              </p>
              <p>
                <ul>
                  <li>
                    At the <strong>Beginner</strong> level, both dancers in a
                    couple must have been partner-dancing for less than two
                    years.
                  </li>
                  <li>
                    At the <strong>Non-Beginner</strong> level, anyone may
                    register.
                  </li>
                </ul>
              </p>
              <p>
                There are no restrictions on dance figures in Nightclub events,
                except lifts and drops are not allowed.
                Get creative!
              </p>
              <p>
                There are no costume restrictions for Nightclub events. This
                is your chance to be especially glamourous! Or to dance in
                pajamas! (You still must follow the <b>Attire Rules</b>, listed
                above.)
              </p>
            </div>
          </section>
          <section>
            <h1>PERFORMANCE TEAM</h1>
            <div>
              <p>
                All performance teams compete at the same level. There are no
                proficiency level, costume, or dance figure restrictions for
                the Performance Team event. (Performance Team members still
                must follow the <b>Attire Rules</b>, listed above.)
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Rules;
