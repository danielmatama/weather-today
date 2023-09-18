// WeatherApp.js

import React from 'react';
import SearchInput from './SearchInput';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <SearchInput />
      <WeatherDisplay />
    </div>
  );
}

export default WeatherApp;
