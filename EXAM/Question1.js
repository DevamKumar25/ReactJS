/* implemetation for the react component that updates the state when an input 
field value changes and display the updated value*/




import React,{useState} from 'react';

function App(){
  const[inputValue,setInputValue] = useState('');

  const handleInputChange = (event)=>{
    setInputValue(event.target.value);
  };


  return(
    <>
    <h1>React input change state</h1>
    <input
    type='text'
    value={inputValue}
    onChange={handleInputChange}
    placeholder='Type somethings.....'/>

    <p>You Typed : {inputValue}</p>
    </>
  );
}


export default App;
