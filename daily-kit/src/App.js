import React from 'react';
import News from './Pages/News';
import Weather from './Pages/Weather';
import Todos from './Pages/Todos';
import Layout from './Pages/Layout';

function App() {
  return (
    <div className="App">
      <Layout />
      <News />
      <Todos />
    </div>
  );
}

export default App;
