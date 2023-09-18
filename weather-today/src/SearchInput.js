// SearchInput.js

import React, { useState } from 'react';

const SearchInput = () => {
  const [location, setLocation] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle submitting the location
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter location..." 
        value={location}
        onChange={handleInputChange} 
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchInput;
