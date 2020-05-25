/* eslint-disable no-unused-vars */
/* eslint-disable no-new-wrappers */
import React from 'react';
import { NavLink } from 'react-router-dom';
import MainRouter from '../Router/MainRouter';
import '../Css/main.css';

const Layout = () => {
  const activeStyle = {
    backgroundColor: '#599681',
    fontWeight: 800,
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
      </nav>
    </div>
  );
};

export default Layout;
