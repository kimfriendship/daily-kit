import React, { useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const fetchData = async () => {
    try {
      const url =
        '/v2/top-headlines?country=kr&apiKey=72fb5a6e9f6e4a5c92b4c3336ac99755';
      const response = await axios.get(url);
      console.log(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default News;
