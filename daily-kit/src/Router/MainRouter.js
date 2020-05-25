import React from 'react';
import { Route } from 'react-router-dom';
import Todos from '../Pages/Todos';
import Weather from '../Pages/Weather';
import News from '../Pages/News';
import About from '../Pages/About';

const MainRouter = () => {
  return (
    <>
      <Route exact path="/" component={Todos} />
      <Route path="/Weather" component={Weather} />
      <Route path="/News" component={News} />
      <Route path="/About" component={About} />
    </>
  );
};

export default MainRouter;
