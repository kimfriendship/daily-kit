import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodosApi from '../Components/TodosApi';
import Todolist from '../Components/Todolist';

const Todos = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/todos');
        console.log(data);
        setTodos(data);
      } catch (e) {
        setError(true);
        console.log(e.message);
      }
      getTodoList();
    };
  }, []);

  return (
    <div className="todoContainer">
      <h1>Today's Todo</h1>
      <input placeholder="Add todos"></input>
      {todos.map((todo) => (
        <Todolist todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
