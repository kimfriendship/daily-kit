import React, { useReducer, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Loading from '../Pages/Loading';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        data: action.data,
        error: null,
        loading: false,
      };
    case 'ERROR':
      return {
        data: null,
        error: action.error,
        loading: false,
      };
    case 'LOADING':
      return {
        data: null,
        error: null,
        loading: true,
      };
    default:
      throw new Error('ERROR');
  }
};

const NewsCategory = () => {
  const onClick = (e) => {
    e.target.style.fontWeight = 700;
    e.target.style.color = '#599681';
    e.target.style.borderBottom = '2px solid #68af96';
  };

  // const [state, dispatch] = useReducer(reducer, {
  //   data: null,
  //   error: null,
  //   loading: false,
  // });

  // const fetchData = async () => {
  //   dispatch({ type: 'LOADING' });
  //   try {
  //     const query = category === 'all' ? '' : `&category=${category}`;
  //     const url = `/v2/top-headlines?country=kr${query}&apiKey=72fb5a6e9f6e4a5c92b4c3336ac99755`;
  //     const response = await axios.get(url);
  //     dispatch({ type: 'SUCCESS', data: response.data.articles });
  //     console.log(response.data.articles);
  //   } catch (e) {
  //     dispatch({ type: 'ERROR', error: e });
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   console.log(category);
  // }, []);

  // const { data, error, loading } = state;

  // if (loading) return <Loading />;
  // if (error) return <div>Error...</div>;
  // if (!data) return null;

  return (
    <>
      <li onClick={onClick}>
        <NavLink to="/News">전체</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to="/News/business">비즈니스</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to="/News/entertainment">엔터테인먼트</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to="/News/technology">기술</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to={'/News/sports'}>스포츠</NavLink>
      </li>
    </>
  );
};

export default NewsCategory;
