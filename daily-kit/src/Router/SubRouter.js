import React from 'react';
import { Route } from 'react-router-dom';
import News from '../Pages/News';

const SubRouter = () => {
  return (
    <>
      <Route path="/:category" component={News} />
    </>
  );
};

export default SubRouter;
