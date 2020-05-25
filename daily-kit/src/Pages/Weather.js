/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import '../Css/weather.css';
import {
  faCloud,
  faSun,
  faUmbrella,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Weather() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const key = '0550b3a23b9c892ac8b4bff41f019f8e';
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=37.532600&lon=127.024612&units=metric&
      exclude=hourly,daily&appid=${key}`;
      const response = await axios.get(url);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const day = new String(new Date()).slice(0, 3);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getDays = (i) => {
    const daysNumbers = days[days.findIndex((e) => e === day) + i];
    return daysNumbers.toUpperCase();
  };

  const time = new String(new Date()).slice(16, 18);
  const getTime = () => {};

  const getIcons = (main, size = '2x') => {
    switch (main) {
      case 'Clouds':
        return (
          <FontAwesomeIcon
            key={Math.random()}
            className={'todayIcon'}
            icon={faCloud}
            size={size}
          />
        );
      case 'Clear':
        return (
          <FontAwesomeIcon
            key={Math.random()}
            className={'todayIcon'}
            icon={faSun}
            size={size}
          />
        );
      case 'Haze':
        return (
          <FontAwesomeIcon
            key={Math.random()}
            className={'todayIcon'}
            icon={faSmog}
            size={size}
          />
        );
      case 'Rain':
        return (
          <FontAwesomeIcon
            key={Math.random()}
            className={'todayIcon'}
            icon={faUmbrella}
            size={size}
          />
        );
      default:
        return (
          <FontAwesomeIcon className={'todayIcon'} icon={faSun} size={size} />
        );
    }
  };

  const { current, hourly, daily } = data;
  if (!data) return null;
  if (loading) return <div>loading</div>;

  return (
    <div className={'weatherWrapper'}>
      <h2 className={'weatherHeader'}>Today's Weather</h2>
      <div className={'currentWeather'}>
        <div className="todayIcons">
          {current.weather.map((c) => getIcons(c.main, '10x'))}
        </div>
        <div className="today">
          <div className="todayTemp">{current.temp.toFixed(1)}°</div>
          <div>
            <span>체감기온{current.feels_like.toFixed(1)}°</span>
            <span>
              자외선
              {current.uvi.toFixed(0)}
            </span>
          </div>
          <div>
            <span>바람{current.wind_speed}ms</span>
            <span>습도{current.humidity}%</span>
          </div>
        </div>
      </div>
      <ul className={'timeWeather'}>
        {hourly.slice(0, 3).map((h) => (
          <li key={h.dt}>
            {time}시 {h.weather.map((w) => getIcons(w.main))}
            {h.temp.toFixed(0)}°
          </li>
        ))}
      </ul>
      <div>
        <ul className={'dailyWeather'}>
          {daily.slice(0, 6).map((day, i) => (
            <li key={day.dt}>
              {' '}
              {getDays(i + 1)}
              {day.weather.map((w) => (
                <div key={w.dt}>{getIcons(w.main)}</div>
              ))}
              {day.temp.min.toFixed(0)}°/{day.temp.max.toFixed(0)}°
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Weather;
