import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Todos from '../Pages/Todos';
import Weather from '../Pages/Weather';
import News from '../Pages/News';
import About from '../Pages/About';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Todos} />
      <Route path="/Weather" component={Weather} />
      <Route path="/News" component={News} />
      <Route path="/About" component={About} />
      <Route path="/:category" component={News} />
      <Route
        render={({ location }) => {
          return (
            <div>
              <h2>This page doesn't exist.</h2>
              <p>{location.pathname}</p>
            </div>
          );
        }}
      />
    </Switch>
  );
};

export default MainRouter;
