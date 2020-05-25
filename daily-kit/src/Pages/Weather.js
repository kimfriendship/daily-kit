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

  let currentDate = new Date(1590634800);
  const date = `${currentDate.getDay()}`


  let weekday = new Array();
  weekday[0] = "SUN";
  weekday[1] = "MON";
  weekday[2] = "TUE";
  weekday[3] = "WED";
  weekday[4] = "THU";
  weekday[5] = "FRI";
  weekday[6] = "SAT";
  console.log(weekday[date]);


  const { current, hourly, daily } = data;


  if (!data) return null;

  return (
    <div>
      <h2 className={'weatherHeader'}>Today's Weather</h2>
      <div className={'currentWeather'}>
        <div>
          {current.weather.map(c => c.main)}
        </div>
        <div>
          <div>
            체감기온{current.feels_like.toFixed(1)}°
            자외선{current.uvi.toFixed(0)}
          </div>
          <div>
            바람{current.wind_speed}ms
            습도{current.humidity}%
          </div>
        </div>

      </div>
      <ul className={'timeWeather'}>
        {hourly.map(h => <li key={h}>{h.dt} {h.temp.toFixed(0)}°</li>)}
      </ul>
      <div>
        <ul className={'dailyWeather'}>
          {daily.map(day => <li key={day}> {day.dt}
            {day.weather.map(w => <div key={w}>{w.main}
            </div>)}
            {day.temp.min.toFixed(0)}°/{day.temp.max.toFixed(0)}°
        </li>)}
        </ul>
      </div>
    </div >
  );
}

export default Weather;

