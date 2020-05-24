import React, { useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const fetchData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=37.532600&lon=127.024612&units=metric&
      exclude=hourly,daily&appid=0550b3a23b9c892ac8b4bff41f019f8e`;
      const response = await axios.get(url);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default Weather;
