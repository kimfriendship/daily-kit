import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainRouter from '../Router/MainRouter';
import '../Css/main.css';

const Layout = () => {
  const activeStyle = {
    backgroundColor: '#599681',
    fontWeight: 800,
    width: '100%',
  };

  const [today, getToday] = useState(new String(new Date()).split(' '));

  useEffect(() => {
    setInterval(() => getToday(new String(new Date()).split(' ')), 60000);
  }, []);

  const [day, month, date, year, time] = today;
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Oct',
    'Nov',
    'Dec',
  ];

  const getMonth = () => {
    const monthNumber = months.findIndex((m) => m === month) + 1;
    return monthNumber < 10 ? '0' + monthNumber : monthNumber;
  };

  const getTime = () => {
    const hour = new String(time).slice(0, 2);
    const min = new String(time).slice(3, 5);
    return hour < 12 ? `${hour} : ${min} AM` : `${hour - 12} : ${min} PM`;
  };

  return (
    <div className={'outerWrapper'}>
      <nav className={'nav'}>
        <h1 className={'date'}>
          {year} / {getMonth()} / {date} / {day.toUpperCase()}
        </h1>
        <h2 className={'time'}>{getTime()}</h2>
        <ul className={'menuList'}>
          <li>
            <NavLink exact to="/" activeStyle={activeStyle}>
              To Do
            </NavLink>
          </li>
          <li>
            <NavLink to="/Weather" activeStyle={activeStyle}>
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink to="/News" activeStyle={activeStyle}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
        </ul>
        <MainRouter />
      </nav>
    </div>
  );
};

export default Layout;
