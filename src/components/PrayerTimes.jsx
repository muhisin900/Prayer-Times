// component to get prayer times
import React, { useState, useEffect } from 'react';

function convertTo12Hour (time24) {
  const [hours, minutes] = time24.split(':');
  let hour = parseInt(hours, 10);
  const amPm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12
  hour = hour ? hour : 12;
  return `${hour}:${minutes} ${amPm}`;
}

function PrayerTimes({ times }) {
  const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  return (

    <div className='prayer-times'>
      <h2 className='title'>Prayer Times</h2>
      <ul className='times-list'>
        {prayerOrder.map(prayer => (
          <li key={prayer} className="time-item">
          <span className="prayer-name">{prayer}</span>
          <span className="prayer-time">{convertTo12Hour(times[prayer])}</span>
        </li>
        ))}
      </ul>
    </div>
    
  );
}

{/* <div className="times">
      <table>
        <thread>
          <tr>
            <th>Prayer</th>
            <th>Time</th>
          </tr>
          <tbody>
            {prayerOrder.map(prayer => (
              <tr key={prayer}>
                <td>{prayer}</td>
                <td>{times[prayer] ? convertTo12Hour(times[prayer]) : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </thread>
      </table>
    </div> */}

export default PrayerTimes;