import React, { useState, useEffect } from 'react';
import PrayerTimes from './components/PrayerTimes';
import LocationInput from './components/LocationInput';
import { getUserLocation } from './utils/geolocation';
import { fetchPrayerTimes } from './utils/api';
import Navbar from './components/Navbar';

function App() {
  const [location, setLocation] = useState(null);
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserLocation()
      .then(setLocation)
      .catch(err => {
        console.error("Couldn't get user location:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (location) {
      setLoading(true);
      fetchPrayerTimes(location)
        .then(setPrayerTimes)
        .finally(() => setLoading(false));
    }
  }, [location]);

  console.log(prayerTimes);

  return (
    <div className="App">
      <Navbar />

      <LocationInput setLocation={setLocation} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {prayerTimes && <PrayerTimes times={prayerTimes} />}
    </div>
  );
}

export default App;