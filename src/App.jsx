import React, { useState, useEffect } from 'react';
import PrayerTimes from './components/PrayerTimes';
import LocationInput from './components/LocationInput';
import { getUserLocation } from './utils/geolocation';
import { fetchPrayerTimes } from './utils/api';
import Navbar from './components/Navbar';

function App() {
  const [location, setLocation] = useState(null);
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    getUserLocation().then(setLocation);
  },[]);

  useEffect(() => {
    if (location){
      fetchPrayerTimes(location).then(setPrayerTimes);
    }
  }, [location]);
  
  console.log('app loaded');

  return(
    <div className="App">
      <Navbar />
      <LocationInput setLocation={setLocation} />
      {prayerTimes && <PrayerTimes times={prayerTimes} />}
    </div>
  )

}

export default App;;

