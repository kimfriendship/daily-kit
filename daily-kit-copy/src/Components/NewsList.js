import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Loading from '../Pages/Loading';
import SubRouter from '../Router/SubRouter';

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

const NewsList = ({ category }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    loading: false,
  });

  const fetchData = async (category = 'All') => {
    dispatch({ type: 'LOADING' });
    try {
      const query = category === 'All' ? '' : `&category=${category}`;
      const url = `/v2/top-headlines?country=kr${query}&apiKey=72fb5a6e9f6e4a5c92b4c3336ac99755`;
      const response = await axios.get(url);
      dispatch({ type: 'SUCCESS', data: response.data.articles });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);

  const { data, error, loading } = state;

  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <>
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
    </>
  );
};

export default NewsList;
