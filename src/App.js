import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';


const App = () => {
  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    // Add your search logic here
  };

  return (
    <div>
      
      <Navbar onSearch={handleSearch} />
      {/* Add the rest of your application here */}
      <Home/>
    </div>
  );
};

export default App;
