import React from 'react';
import News from './Pages/News';
import Weather from './Pages/Weather';
import Todos from './Pages/Todos';

function App() {
  return (
    <div className="App">
      <News />
      <Weather />
      <Todos />
    </div>
  );
}

export default App;
