/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/weather.css';
import { faCloud, faSun, faUmbrella, faSmog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


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
  if (!data) return null;



  const day = new String(new Date()).slice(0, 3)
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const getDays = (i) => {
    const daysNumbers = days[days.findIndex((e) => e === day) + i];
    console.log(i)

    return daysNumbers;
  };

  const time = new String(new Date()).slice(16, 18);
  const getTime = () => {
  }


  const getIcons = (main) => {
    switch (main) {
      case 'Clouds':
        return <FontAwesomeIcon className={"todayIcon"} icon={faCloud} size="2x" />
      case 'Clear':
        return <FontAwesomeIcon className={"todayIcon"} icon={faSun} size="2x" />
      case 'Haze':
        return <FontAwesomeIcon className={"todayIcon"} icon={faSmog} size="2x" />
      case 'Rain':
        return <FontAwesomeIcon className={"todayIcon"} icon={faUmbrella} size="2x" />
      default:
        return <FontAwesomeIcon className={"todayIcon"} icon={faSun} size="2x" />
    }
  }
  const { current, hourly, daily } = data;



  return (
    <div>
      <h2 className={'weatherHeader'}>Today's Weather</h2>
      <div className={'currentWeather'}>
        <div className="todayIcons">
          {current.weather.map(c => getIcons(c.main))}
        </div>
        <div className="today">
          <div className="todayTemp">
            {current.temp.toFixed(1)}°
          </div>
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
        {hourly.slice(0, 3).map(h => <li key={h}>{time}시 {h.weather.map(w => getIcons(w.main))}{h.temp.toFixed(0)}°</li>)}
      </ul>
      <div>
        <ul className={'dailyWeather'}>
          {daily.slice(0, 6).map((day, i) => <li key={day}> {getDays(i + 1)}
            {day.weather.map(w => <div key={w}>{getIcons(w.main)}
            </div>)}
            {day.temp.min.toFixed(0)}°/{day.temp.max.toFixed(0)}°
        </li>)}
        </ul>
      </div>
    </div >
  );
}

export default Weather;

