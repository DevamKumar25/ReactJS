import React from 'react';
import {useState} from 'react'

export function App() {
  const [color, setColor] = useState('Olive');
  return (
    <div style={{backgroundColor: color}}>
      <button style={{ backgroundColor: 'red' }} onClick={()=> setColor("red")}>Red</button>
      <button style={{ backgroundColor: 'blue' }} onClick={()=> setColor("blue")}>blue</button>
      <button style={{ backgroundColor: 'green' }} onClick={()=> setColor("green")}>green</button>
      <button style={{ backgroundColor: 'yellow' }} onClick={()=> setColor("yellow")}>yellow</button>
    </div>
  );
}
