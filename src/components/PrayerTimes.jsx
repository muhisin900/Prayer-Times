// component to get prayer times
import React, { useState, useEffect } from 'react';

function PrayerTimes({ times }) {
  return (
    <div>
      <h2>Prayer Times</h2>
      <ul>
      <li>Fajr: 5:00 am</li>
        <li>Dhuhr: 12:00 pm</li>
        <li>Asr: 5:00 pm</li>
        <li>Maghrib: 8:00 pm</li>
        <li>Isha: 10:00 pm</li>
      </ul>
    </div>
  );
}

export default PrayerTimes;