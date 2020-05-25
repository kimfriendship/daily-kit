import React from 'react';
<<<<<<< HEAD
import { Route, NavLink } from 'react-router-dom';
=======
import { NavLink } from 'react-router-dom';
import MainRouter from '../Router/MainRouter';
import '../Css/main.css';
>>>>>>> e8c8da4e92ac4e07d952bb41219c107212c6f9cf

const Layout = () => {
  const activeStyle = {
    backgroundColor: '#599681',
    fontWeight: 800,
<<<<<<< HEAD
  };

  return (
    <div className={'outerWrapper'}>
      <nav>
        <h1>Date</h1>
        <h2>Time</h2>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={activeStyle} />
          </li>
          <li>Weather</li>
          <li>News</li>
          <li>About</li>
        </ul>
=======
    width: '100%',
  };

  let today = new String(new Date()).split(' ');
  const [day, month, date, year, time] = today;

  return (
    <div className={'outerWrapper'}>
      <nav className={'nav'}>
        <h1 className={'date'}>
          {month} {date} {day}
        </h1>
        <h2 className={'time'}>{time}</h2>
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
>>>>>>> e8c8da4e92ac4e07d952bb41219c107212c6f9cf
      </nav>
    </div>
  );
};

export default Layout;
