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
    <div className='times'>
      <h2>Prayer Times</h2>
      <ul>
        {prayerOrder.map(prayer => (
          <li key={prayer}>{prayer}: {convertTo12Hour(times[prayer])}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrayerTimes;