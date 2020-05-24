import React, { useEffect } from 'react';
import axios from 'axios';

const Todos = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos');
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default Todos;
