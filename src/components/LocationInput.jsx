// component to input manual location
import React, { useState, useEffect } from 'react';
function LocationInput ({ setLocation }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    setLocation({ city });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className='lo-input'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button className="location-btn" type="submit">Set Location</button>
    </form>
  );
}
 
export default LocationInput;