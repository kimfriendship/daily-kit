import React, { useEffect, useReducer } from 'react';
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

const News = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    loading: false,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const url =
        '/v2/top-headlines?country=kr&apiKey=72fb5a6e9f6e4a5c92b4c3336ac99755';
      const response = await axios.get(url);
      dispatch({ type: 'SUCCESS', data: response.data.articles });
      console.log(response.data.articles);
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { data, error, loading } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <div className={'newsWrapper'}>
      <h2 className={'newsPageTitle'}>Today's News</h2>
      <ul className={'categories'}>
        <li>all</li>
        <li>social</li>
        <li>social</li>
        <li>social</li>
        <li>social</li>
        <li>social</li>
        <li>social</li>
      </ul>
      <ul className={'newsList'}>
        {data.map((news, i) => {
          return (
            <li key={i} className={'news'}>
              <a href={news.url}>
                <h3 className={'newsTitle'}>{news.title}</h3>
                <img
                  className={'newsThumbnail'}
                  src={news.urlToImage}
                  alt="Thumbnail"
                />
                <p className={'newsDetail'}>{news.description}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default News;
