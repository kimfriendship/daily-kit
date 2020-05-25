import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const Layout = () => {
  const activeStyle = {
    backgroundColor: '#599681',
    fontWeight: 800,
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
      </nav>
    </div>
  );
};

export default Layout;
