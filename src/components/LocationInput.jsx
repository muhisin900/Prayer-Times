// component to input manual location
import React, { useState } from 'react';

function LocationInput({ setLocation }) {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation({ city, country });
    };

    return (
        <form className="lo-form"onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                required
            />
            <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter country"
            />
            <button type="submit">Set Location</button>
        </form>
    );
}

export default LocationInput;
