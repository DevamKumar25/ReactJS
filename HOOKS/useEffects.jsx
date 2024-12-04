import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timerActive, setTimerActive] = useState(true); // Track if the timer is active

  useEffect(() => {
    // Only start the timer if it's active
    if (timerActive) {
      const timer = setInterval(() => {
        console.log('timer is running');
      }, 1000);

      // Cleanup function to clear the interval when the component unmounts or timer is stopped
      return () => {
        clearInterval(timer);
        console.log('timer closed');
      };
    }
  }, [timerActive]); // Effect runs when `timerActive` changes

  // Function to toggle the timer
  const toggleTimer = () => {
    setTimerActive((prev) => !prev); // Toggle the state (true -> false or false -> true)
  };

  return (
    <div className="App">
      <h1>Timer Example</h1>
      <button onClick={toggleTimer}>
        {timerActive ? 'Stop Timer' : 'Start Timer'}
      </button>
    </div>
  );
}

export default App;





/*
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log(`You clicked ${count} times`);
  },[count])

  return (
    <>
      <p>You clicked ${count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
*/


