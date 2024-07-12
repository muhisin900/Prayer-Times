import axios from "axios";

//function to fetch prayer times from api
export const fetchPrayerTimes = async (location) => {
    const { latitude, longitude } = location;

    const response = await axios.get(
        `https://api.aladhan.com/v1/timings/${Date.now() / 1000}?latitude=${latitude}&longitude=${longitude}&method=2`
      );
    return response.data.data.timings;
}
