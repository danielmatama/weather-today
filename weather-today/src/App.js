// app.js

import React from 'react';
import './App.css'; // You can include your CSS styling here
import WeatherApp from './WeatherApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherApp />
      </header>
    </div>
  );
}

export default App;