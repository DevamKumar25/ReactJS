/*
Now in this componnets , we will use the useLocation 
hook to access the query parametrs from the URL
and display them

*/
import React from 'react';
import { useLocation } from 'react-router-dom';

function Details() {
  const location = useLocation();

  // Extract query parameters from the location object
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const age = queryParams.get('age');

  return (
    <div>
      <h1>Details Page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Details;
