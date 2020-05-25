/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/weather.css';

function Weather() {

  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const key = '0550b3a23b9c892ac8b4bff41f019f8e'
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=37.532600&lon=127.024612&units=metric&
      exclude=hourly,daily&appid=${key}`;
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let date = new Date();


  const { current, hourly, daily } = data;


  if (!data) return null;
  console.log(daily.map(day => day));

  return (
    <div>
      <h2 className={'weatherHeader'}>Today's Weather</h2>
      <div className={'currentWeather'}>

      </div>
      <div className={'timeWeather'}>

      </div>
      <div>
        <ul className={'dailyWeather'}>
          {daily.map(day => <li key={day}> {day.dt}
            {day.weather.map(weather => <div key={weather}>{weather.main}
            </div>)}
            {day.temp.min.toFixed(0)}°/{day.temp.max.toFixed(0)}°
        </li>)}
        </ul>
      </div>
    </div>
  );
}

export default Weather;
