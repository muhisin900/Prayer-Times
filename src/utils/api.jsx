import axios from "axios";

export const fetchPrayerTimes = async (location) => {
  const { city, country } = location;
  const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

  try {
    const response = await axios.get(
      `http://api.aladhan.com/v1/timingsByCity/${date}?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=2`
    );
    return response.data.data.timings;
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    throw error;
  }
};
