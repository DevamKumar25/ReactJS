/*
Implement a React form with uncontrolled components.
Submit the form and display the input values on the console without 
managing them in the components state
*/

import React,{useRef} from 'react';


function UncontrolledForm(){
  const nameref = useRef();
  const emailref = useRef();


  const handleSubmit = (event)=>{
    event.preventDefault();

    const nameValue = nameref.current.value;
    const emailValue = emailref.current.value;


    console.log('Name: ',nameValue);
    console.log('Email: ',emailValue);


    nameref.current.value = '';
    emailref.current.value= '';
  };


  return(
    <>
    <h1>Uncontrolled Form </h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type='text' ref={nameref} placeholder='Enter your name' />
      </div>
      <div>
        <label>Email:</label>
        <input type='email' ref={emailref} placeholder='Enter your name'/>
      </div>
      <button type ='submit'>Submit</button>
    </form>
    </>
  );
}

export default UncontrolledForm;  //export the component
