import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../Components/TodosApi';
import Todolist from '../Components/Todolist';
import '../Css/todos.css';

const Todos = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const getTodoList = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/todos');
        console.log(data);
        setTodos(data);
      } catch (e) {
        setError(true);
        console.log(e.message);
      }
      setLoading(false);
    };
    getTodoList();
  }, []);

  const addTodo = async () => {
    await api.post('/todos', {
      content: value,
      status: 'incompleted',
    });
    const { data } = await api.get('/todos');
    setTodos(data);
    console.log(data);
    setValue('');
  };

  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    const { data } = await api.get('/todos');
    setTodos(data);
  };

  const changeStatus = async (todo) => {
    await api.put(`/todos/${todo.id}`, {
      ...todo,
      status: todo.status === 'incompleted' ? 'completed' : 'incompleted',
    });
    const { data } = await api.get('/todos');
    console.log(data);
    setTodos(data);
  };

  const editContent = async (todo, content) => {
    await api.put(`/todos/${todo.id}`, {
      ...todo,
      content,
    });
    const { data } = await api.get('/todos');
    console.log(data);
    setTodos(data);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') console.log(e.target.value);
    addTodo();
  };

  return (
    <div className="todoContainer">
      {isLoading && <h1 className="message">Now Loading...</h1>}
      {hasError && <h1 className="message">has Error!</h1>}
      <div>
        <h1 className="headerStyle">Today's Todo</h1>
      </div>
      <div className="containerStyle">
        <input
          value={value}
          className="todoInputStyle"
          placeholder="Add todos"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyPress={onKeypress}
        ></input>
        <button className="buttonStyle" onClick={addTodo}>
          add
        </button>
      </div>
      <div className="countSection">
        <div>Total: {todos.length}</div>
        <div>
          Completed Todos:{' '}
          {todos.filter((todo) => todo.status === 'completed').length}
        </div>
        <div>
          Incompleted Todos:{' '}
          {todos.filter((todo) => todo.status === 'incompleted').length}
        </div>
      </div>
      {todos.map((todo) => (
        <Todolist
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          changeStatus={changeStatus}
          editContent={editContent}
        />
      ))}
    </div>
  );
};

export default Todos;
