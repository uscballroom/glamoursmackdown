import './Events.css';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Events extends Component {
  _schedule = [
    { time: <span><b>8:00</b>am</span>,  activity: 'Doors open' },
    { time: <span><b>9:00</b>am</span>,  activity: 'Syllabus American Smooth' },
    { time: <span><b>10:45</b>am</span>, activity: 'Syllabus International Standard' },
    { time: <span><b>12:45</b>pm</span>, activity: 'Judges break, Social dancing' },
    { time: <span><b>1:15</b>pm</span>,  activity: 'Syllabus American Rhythm' },
    { time: <span><b>3:00</b>pm</span>,  activity: 'Syllabus International Latin' },
    { time: <span><b>5:00</b>pm</span>,  activity: 'Dinner break' },
    { time: <span><b>6:00</b>pm</span>,  activity: 'Nightclub events' },
    { time: <span><b>7:00</b>pm</span>,  activity: 'Performance Team events' },
    { time: <span><b>7:30</b>pm</span>,  activity: 'Open events' },
    { time: <span><b>9:30</b>pm</span>,  activity: 'Team Match' },
  ];
  _syllabusEventsByStyle = [
    { title: 'Syllabus American Smooth', events: [
      { level: 'Newcomer',   dances: ['Waltz', 'Tango', 'Foxtrot', 'Viennese\xa0Waltz'] },
      { level: 'Bronze',     dances: ['Waltz', 'Tango', 'Foxtrot', 'Viennese\xa0Waltz'] },
      { level: 'Silver',     dances: ['Waltz', 'Tango', 'Foxtrot', 'Viennese\xa0Waltz'] },
      { level: 'Gold',       dances: ['Waltz', 'Tango', 'Foxtrot', 'Viennese\xa0Waltz'] },
      { level: 'Rookie/Vet', dances: ['Waltz', 'Tango', 'Foxtrot', 'Viennese\xa0Waltz'] },
    ]},
    { title: 'Syllabus International Standard', events: [
      { level: 'Newcomer',   dances: ['Waltz', 'Tango', 'Viennese\xa0Waltz', 'Slow\xa0Foxtrot', 'Quickstep'] },
      { level: 'Bronze',     dances: ['Waltz', 'Tango', 'Viennese\xa0Waltz', 'Slow\xa0Foxtrot', 'Quickstep'] },
      { level: 'Silver',     dances: ['Waltz', 'Tango', 'Viennese\xa0Waltz', 'Slow\xa0Foxtrot', 'Quickstep'] },
      { level: 'Gold',       dances: ['Waltz', 'Tango', 'Viennese\xa0Waltz', 'Slow\xa0Foxtrot', 'Quickstep'] },
      { level: 'Rookie/Vet', dances: ['Waltz', 'Tango', 'Viennese\xa0Waltz', 'Slow\xa0Foxtrot', 'Quickstep'] },
    ]},
    { title: 'Syllabus American Rhythm', events: [
      { level: 'Newcomer',   dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Bolero', 'Mambo'] },
      { level: 'Bronze',     dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Bolero', 'Mambo'] },
      { level: 'Silver',     dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Bolero', 'Mambo'] },
      { level: 'Gold',       dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Bolero', 'Mambo'] },
      { level: 'Rookie/Vet', dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Bolero', 'Mambo'] },
    ]},
    { title: 'Syllabus International Latin', events: [
      { level: 'Newcomer',   dances: ['Cha-Cha', 'Rumba', 'Samba', 'Jive'] },
      { level: 'Bronze',     dances: ['Cha-Cha', 'Rumba', 'Samba', 'Paso\xa0Doble', 'Jive'] },
      { level: 'Silver',     dances: ['Cha-Cha', 'Rumba', 'Samba', 'Paso\xa0Doble', 'Jive'] },
      { level: 'Gold',       dances: ['Cha-Cha', 'Rumba', 'Samba', 'Paso\xa0Doble', 'Jive'] },
      { level: 'Rookie/Vet', dances: ['Cha-Cha', 'Rumba', 'Samba', 'Paso\xa0Doble', 'Jive'] },
    ]},
  ];
  _openEventsByStyle = [
    { title: 'Open American Smooth', events: [
      { level: 'Novice',    dances: ['Waltz\xa0/ Tango\xa0/ Foxtrot'] },
      { level: 'Pre-champ', dances: ['Waltz\xa0/ Tango\xa0/ Foxtrot\xa0/ Viennese\xa0Waltz'] },
      { level: 'Champ',     dances: ['Waltz\xa0/ Tango\xa0/ Foxtrot\xa0/ Viennese\xa0Waltz'] },
    ]},
    { title: 'Open International Standard', events: [
      { level: 'Novice',    dances: ['Waltz\xa0/ Tango\xa0/ Quickstep'] },
      { level: 'Pre-champ', dances: ['Waltz\xa0/ Tango\xa0/ Foxtrot\xa0/ Quickstep'] },
      { level: 'Champ',     dances: ['Waltz\xa0/ Tango\xa0/ Viennese\xa0Waltz\xa0/ Foxtrot\xa0/ Quickstep'] },
    ]},
    { title: 'Open American Rhythm', events: [
      { level: 'Novice',    dances: ['Cha-Cha\xa0/ Rumba\xa0/ East\xa0Coast\xa0Swing'] },
      { level: 'Pre-champ', dances: ['Cha-Cha\xa0/ Rumba\xa0/ East\xa0Coast\xa0Swing\xa0/ Bolero'] },
      { level: 'Champ',     dances: ['Cha-Cha\xa0/ Rumba\xa0/ East\xa0Coast\xa0Swing\xa0/ Bolero\xa0/ Mambo'] },
    ]},
    { title: 'Open International Latin', events: [
      { level: 'Novice',    dances: ['Cha-Cha\xa0/ Rumba\xa0/ Samba'] },
      { level: 'Pre-champ', dances: ['Cha-Cha\xa0/ Rumba\xa0/ Samba\xa0/ Jive'] },
      { level: 'Champ',     dances: ['Cha-Cha\xa0/ Rumba\xa0/ Samba\xa0/ Paso\xa0Doble\xa0/ Jive'] },
    ]},
  ];
  _nightclubEventsByStyle = [
    { title: 'Nightclub', events: [
      { level: 'Beginner',     dances: ['Salsa', 'Bachata', 'Merengue', 'Hustle', 'West\xa0Coast\xa0Swing', 'Nightclub\xa0Twostep', 'Blues', 'Argentine\xa0Tango', 'Lindy\xa0Hop'] },
      { level: 'Non-Beginner', dances: ['Salsa', 'Bachata', 'Merengue', 'Hustle', 'West\xa0Coast\xa0Swing', 'Nightclub\xa0Twostep', 'Blues', 'Argentine\xa0Tango', 'Lindy\xa0Hop'] },
    ]},
  ];
  render() {
    return (
      <div className="Events">
        <div className="container">
          <section>
            <h1>TENTATIVE SCHEDULE</h1>
            <div>
              <p>
                {this._schedule.map((item, i) => (
                  <div className="Events-schedule-row" key={i}>
                    <div className="Events-schedule-time">{item.time}</div>
                    <div className="Events-schedule-activity">{item.activity}</div>
                  </div>
                ))}
              </p>
              <p>
                During the Dinner Break, no one will be allowed in the ballroom.
                There will be a nearby room reserved for competitors to occupy
                during this time.
              </p>
            </div>
          </section>
          <section>
            <h1>LIST OF EVENTS</h1>
            <div>
              <p>
                All of the available Glamour Smackdown events are listed below,
                in schedule order. Note: the order of individual levels and dances
                within a style may not be the same as listed here.
              </p>
              <p>
                Check the <Link to="/rules">rules</Link> page for information
                about what levels you can register at.
              </p>
              <p>
                Note: Before registration opens, the event list is subject to
                change. Join the Glamour Smackdown <a href="https://www.facebook.com/events/142139819599212/" target="_blank">Facebook event</a> to
                be notified when registration opens or anything changes.
              </p>
              <p>
                Dances in multi-dance events appear in the same bubble, separated
                by slashes.
              </p>
            </div>
          </section>
          <section>
            <h1>SYLLABUS EVENTS</h1>
            <div>
              {this._syllabusEventsByStyle.map(this._mapRenderStyleEvents)}
            </div>
          </section>
          <section>
            <h1>OTHER EVENTS</h1>
            <div>
              {this._nightclubEventsByStyle.map(this._mapRenderStyleEvents)}
              <div className="Events-eventlist-style">
                <h2>Performance Teams</h2>
                <p>
                  All performance teams compete against each other in one event.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h1>OPEN EVENTS</h1>
            <div>
              {this._openEventsByStyle.map(this._mapRenderStyleEvents)}
            </div>
          </section>
        </div>
      </div>
    );
  }

  _mapRenderStyleEvents(style, style_i) {
    return (
      <div className="Events-eventlist-style" key={style.title}>
        <h2>{style.title}</h2>
        {style.events.map((event, event_i) => (
          <div className="Events-eventlist-row" key={event_i}>
            <div className="Events-eventlist-level-column">{event.level}</div>
            <div className="Events-eventlist-dances-column">
              <span className="Events-eventlist-dances">
                {event.dances.map((dance, dance_i) => (
                  <b className="Events-eventlist-dance" key={dance_i}>{dance}</b>
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Events;
