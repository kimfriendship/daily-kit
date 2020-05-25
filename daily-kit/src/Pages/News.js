import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SubRouter from '../Router/SubRouter';
import '../Css/news.css';
import NewsList from '../Components/NewsList';

const News = () => {
  const [category, setCategory] = useState('');
  const activeStyle = {
    fontWeight: 700,
    color: '#599681',
    borderBottom: '2px solid #68af96',
  };

  const onClick = (e) => {
    setCategory(e.target.textContent);
  };

  return (
    <>
      <div className={'newsWrapper'}>
        <h2 className={'newsPageTitle'}>Today's News</h2>
        <ul className={'categories'}>
          <li onClick={onClick}>
            <NavLink to="/all" activeStyle={activeStyle}>
              All
            </NavLink>
          </li>
          <li onClick={onClick}>
            <NavLink to="/business" activeStyle={activeStyle}>
              Business
            </NavLink>
          </li>
          <li onClick={onClick}>
            <NavLink to="/entertainment" activeStyle={activeStyle}>
              Entertainment
            </NavLink>
          </li>
          <li onClick={onClick}>
            <NavLink to="/technology" activeStyle={activeStyle}>
              Technology
            </NavLink>
          </li>
          <li onClick={onClick}>
            <NavLink to={'/sports'} activeStyle={activeStyle}>
              Sports
            </NavLink>
          </li>
        </ul>
        <NewsList category={category} />
        <SubRouter />
      </div>
    </>
  );
};

export default News;
