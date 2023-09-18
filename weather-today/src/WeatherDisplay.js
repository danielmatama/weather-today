// WeatherDisplay.js

import React from 'react';

const WeatherDisplay = () => {
  // Assume that weatherData is fetched from the API
  const weatherData = {
    temperature: 25,
    conditions: 'Clear',
    humidity: 70
  };

  return (
    <div className="weather-display">
      <h2>Weather Information</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Conditions: {weatherData.conditions}</p>
      <p>Humidity: {weatherData.humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;
