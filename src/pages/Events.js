import './Events.css';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Events extends Component {
  _schedule = [
    { time: '8:00am',    activity: 'Doors open' },
    { time: '9:00am',    activity: 'Syllabus American Smooth' },
    { time: '11:00am',   activity: 'Syllabus International Standard' },
    { time: '1:00pm',    activity: 'Syllabus American Rhythm' },
    { time: '3:00pm',    activity: 'Syllabus International Latin' },
    { time: '5:00pm',    activity: 'Dinner break' },
    { time: '6:00pm',    activity: 'Nightclub events' },
    { time: '7:00pm',    activity: 'Performance Team events' },
    { time: '7:30pm',    activity: 'Open events' },
    { time: '9:30pm',    activity: 'Team Match' },
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
      { level: 'Newcomer',   dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Mambo', 'Bolero'] },
      { level: 'Bronze',     dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Mambo', 'Bolero'] },
      { level: 'Silver',     dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Mambo', 'Bolero'] },
      { level: 'Gold',       dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Mambo', 'Bolero'] },
      { level: 'Rookie/Vet', dances: ['Cha-Cha', 'Rumba', 'East\xa0Coast\xa0Swing', 'Mambo', 'Bolero'] },
    ]},
    { title: 'Syllabus International Latin', events: [
      { level: 'Newcomer',   dances: ['Cha-Cha', 'Rumba', 'Samba', 'Paso\xa0Doble', 'Jive'] },
      { level: 'Bronze',     dances: ['Cha-Cha', 'Rumba', 'Samba', 'Paso\xa0Doble', 'Jive'] },
      { level: 'Silver',     dances: ['Cha-Cha', 'Rumba', 'Samba', 'Paso\xa0Doble', 'Jive'] },
      { level: 'Gold',       dances: ['Cha-Cha', 'Rumba', 'Samba', 'Paso\xa0Doble', 'Jive'] },
      { level: 'Rookie/Vet', dances: ['Cha-Cha', 'Rumba', 'Samba', 'Paso\xa0Doble', 'Jive'] },
    ]},
  ];
  _nightclubEventsByStyle = [
    { title: 'Nightclub', events: [
      { level: 'Beginner',     dances: ['Salsa', 'Merengue', 'Hustle', 'West\xa0Coast\xa0Swing', 'Nightclub\xa0Twostep', 'Blues', 'Argentine\xa0Tango', 'Lindy\xa0Hop'] },
      { level: 'Non-Beginner', dances: ['Salsa', 'Merengue', 'Hustle', 'West\xa0Coast\xa0Swing', 'Nightclub\xa0Twostep', 'Blues', 'Argentine\xa0Tango', 'Lindy\xa0Hop'] },
    ]},
  ];
  _openEventsByStyle = [
    { title: 'Open American Smooth', events: [
      { level: 'Novice',    dances: ['Waltz\xa0/ Tango\xa0/ Foxtrot', 'Viennese\xa0Waltz'] },
      { level: 'Pre-champ', dances: ['Waltz\xa0/ Tango\xa0/ Foxtrot\xa0/ Viennese\xa0Waltz'] },
      { level: 'Champ',     dances: ['Waltz\xa0/ Tango\xa0/ Foxtrot\xa0/ Viennese\xa0Waltz'] },
    ]},
    { title: 'Open International Standard', events: [
      { level: 'Novice',    dances: ['Waltz\xa0/ Foxtrot\xa0/ Quickstep', 'Tango\xa0/ Viennese\xa0Waltz'] },
      { level: 'Pre-champ', dances: ['Waltz\xa0/ Tango\xa0/ Foxtrot\xa0/ Quickstep', 'Viennese\xa0Waltz'] },
      { level: 'Champ',     dances: ['Waltz\xa0/ Tango\xa0/ Foxtrot\xa0/ Quickstep\xa0/ Viennese\xa0Waltz'] },
    ]},
    { title: 'Open American Rhythm', events: [
      { level: 'Novice',    dances: ['Cha-Cha\xa0/ Rumba\xa0/ East\xa0Coast\xa0Swing', 'Mambo\xa0/ Bolero'] },
      { level: 'Pre-champ', dances: ['Cha-Cha\xa0/ Rumba\xa0/ East\xa0Coast\xa0Swing\xa0/ Bolero', 'Mambo'] },
      { level: 'Champ',     dances: ['Cha-Cha\xa0/ Rumba\xa0/ East\xa0Coast\xa0Swing\xa0/ Mambo\xa0/ Bolero'] },
    ]},
    { title: 'Open International Latin', events: [
      { level: 'Novice',    dances: ['Cha-Cha\xa0/ Rumba\xa0/ Samba', 'Paso\xa0Doble\xa0/ Jive'] },
      { level: 'Pre-champ', dances: ['Cha-Cha\xa0/ Rumba\xa0/ Samba\xa0/ Jive', 'Paso\xa0Doble'] },
      { level: 'Champ',     dances: ['Cha-Cha\xa0/ Rumba\xa0/ Samba\xa0/ Paso\xa0Doble\xa0/ Jive'] },
    ]},
  ];
  render() {
    return (
      <div className="Events">
        <div className="container">
          <div className="Common-row">
            <div className="Common-title">TENTATIVE SCHEDULE</div>
            <div className="Common-info">
              <p>
                {this._schedule.map(item => (
                  <div className="Events-schedule-row" key={item.time}>
                    <div className="Events-schedule-time"><b>{item.time}</b></div>
                    <div className="Events-schedule-activity">{item.activity}</div>
                  </div>
                ))}
              </p>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">LIST OF EVENTS</div>
            <div className="Common-info">
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
          </div>
          <div className="Common-row">
            <div className="Common-title">SYLLABUS EVENTS</div>
            <div className="Common-info">
              {this._syllabusEventsByStyle.map(this._mapRenderStyleEvents)}
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">OTHER EVENTS</div>
            <div className="Common-info">
              {this._nightclubEventsByStyle.map(this._mapRenderStyleEvents)}
              <div className="Events-eventlist-style">
                <p><strong>Performance Teams</strong></p>
              </div>
            </div>
          </div>
          <div className="Common-row">
            <div className="Common-title">OPEN EVENTS</div>
            <div className="Common-info">
              {this._openEventsByStyle.map(this._mapRenderStyleEvents)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _mapRenderStyleEvents(style, style_i) {
    return (
      <div className="Events-eventlist-style" key={style.title}>
        <p><strong>{style.title}</strong></p>
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
