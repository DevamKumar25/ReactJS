/*
In this file we will programmatically navigate to the 
/details route , passing query parametrs using 
useNavigate hook

*/

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigating to /details with query parameters
    navigate('/details?name=JaneDoe&age=25');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to Details</button>
    </div>
  );
}

export default Home;
