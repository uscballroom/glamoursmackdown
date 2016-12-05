import React, { Component } from 'react';

import './Events.css';

class Events extends Component {
  _schedule = [
    { time: '8:00am',    activity: 'Doors open' },
    { time: '9:00am',    activity: 'Syllabus American Smooth events' },
    { time: '11:00am',   activity: 'Syllabus International Standard events' },
    { time: '1:00pm',    activity: 'Syllabus American Rhythm events' },
    { time: '3:00pm',    activity: 'Syllabus International Latin events' },
    { time: '5:00pm',    activity: 'Dinner break' },
    { time: '6:00pm',    activity: 'Nightclub events' },
    { time: '7:00pm',    activity: 'Formation Team events' },
    { time: '7:30pm',    activity: 'Open events' },
    { time: '9:30pm',    activity: 'Team Match' },
  ];
  _styles = [
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
    { title: 'Nightclub', events: [
      { level: 'Beginner',     dances: ['Salsa', 'Merengue', 'Hustle', 'West\xa0Coast\xa0Swing', 'Nightclub\xa0Twostep', 'Blues', 'Argentine\xa0Tango', 'Lindy\xa0Hop'] },
      { level: 'Non-Beginner', dances: ['Salsa', 'Merengue', 'Hustle', 'West\xa0Coast\xa0Swing', 'Nightclub\xa0Twostep', 'Blues', 'Argentine\xa0Tango', 'Lindy\xa0Hop'] },
    ]},
    { title: 'Formation Team', events: [
    ]},
    { title: 'Open American Smooth', events: [
      { level: 'Novice',    dances: ['Waltz / Tango / Foxtrot', 'Viennese\xa0Waltz'] },
      { level: 'Pre-champ', dances: ['Waltz / Tango / Foxtrot / Viennese\xa0Waltz'] },
      { level: 'Champ',     dances: ['Waltz / Tango / Foxtrot / Viennese\xa0Waltz'] },
    ]},
    { title: 'Open International Standard', events: [
      { level: 'Novice',    dances: ['Waltz / Foxtrot / Quickstep', 'Tango / Viennese\xa0Waltz'] },
      { level: 'Pre-champ', dances: ['Waltz / Tango / Foxtrot / Quickstep', 'Viennese\xa0Waltz'] },
      { level: 'Champ',     dances: ['Waltz / Tango / Foxtrot / Quickstep / Viennese\xa0Waltz'] },
    ]},
    { title: 'Open American Rhythm', events: [
      { level: 'Novice',    dances: ['Cha-Cha / Rumba / East\xa0Coast\xa0Swing', 'Mambo / Bolero'] },
      { level: 'Pre-champ', dances: ['Cha-Cha / Rumba / East\xa0Coast\xa0Swing / Bolero', 'Mambo'] },
      { level: 'Champ',     dances: ['Cha-Cha / Rumba / East\xa0Coast\xa0Swing / Mambo / Bolero'] },
    ]},
    { title: 'Open International Latin', events: [
      { level: 'Novice',    dances: ['Cha-Cha / Rumba / Samba', 'Paso\xa0Doble / Jive'] },
      { level: 'Pre-champ', dances: ['Cha-Cha / Rumba / Samba / Jive', 'Paso\xa0Doble'] },
      { level: 'Champ',     dances: ['Cha-Cha / Rumba / Samba / Paso\xa0Doble / Jive'] },
    ]},
  ];
  render() {
    return (
      <div className="Events">
        <div className="container">
          <h1>
            Tentative Schedule
          </h1>
          {this._schedule.map(item => (
            <div className="row" key={item.time}>
              <p className="col-xs-2">{item.time}</p>
              <p className="col-xs-10">{item.activity}</p>
            </div>
          ))}
          <h1>All Events</h1>
          <p>
            Note: multi-dance events are grouped together by slashes.
          </p>
          {this._styles.map((style, i) => (
            <div key={i}>
              <h3>{style.title}</h3>
              {style.events.length > 0 && <table className="Events-table">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Available Dances</th>
                  </tr>
                </thead>
                <tbody>{style.events.map(event => (
                  <tr>
                    <td>{event.level}</td>
                    <td>{event.dances.map((dance, i) => (
                      <span className="Events-dances">
                        {i !== 0 && (<span>,&nbsp; </span>)}
                        <span className='Events-dance'>{dance}</span>
                      </span>
                    ))}</td>
                  </tr>
                ))}</tbody>
              </table>}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Events;
