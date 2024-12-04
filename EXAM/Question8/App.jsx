/*
Set up a simple Redux store in a React  app and demonstrate 
how to connect a components to the store using useSelctor and 
useDispatch
*/


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/Action'; // Import action creators

function App() {
  // useSelector to access the current state of the counter
  const counter = useSelector((state) => state.counter);

  // useDispatch to get the dispatch function to send actions
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <p>Counter: {counter}</p>

      {/* Dispatch the increment action when button is clicked */}
      <button onClick={() => dispatch(increment())}>Increment</button>

      {/* Dispatch the decrement action when button is clicked */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
