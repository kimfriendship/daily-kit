/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h2>Today's Weather</h2>

      <div>
        {current.dt}, {current.humidity} , {current.wind_speed}
      </div>
      {daily.map(day => <div>{day.dt}</div>)}
    </div>
  );
}

export default Weather;
