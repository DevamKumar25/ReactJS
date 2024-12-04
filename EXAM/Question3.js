/*
Create a controlled form in React with input for name and email.
Implement form validation to check if the fields are filled 
and display error messages if they are not.
*/


import React,{useState} from 'react';

function ControlledForm(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [errors,setErrors] = useState({name: '', email: ''});


  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {name: '',email:''};

    if(name.trim()===''){
      newErrors.name = "Name is required";
    }


    if(email.trim() === ''){
      newErrors.email = 'Email is required';
    }
    else if (!/\S+@\S+\.\S+/.test(email)){
      newErrors.email = 'Invalid email';
    }

    if(newErrors.name || newErrors.email){
      setErrors(newErrors);
    }
    else{
      console.log('Form submitted successfully with : ',{name,email});
      setName('');      // Clear the form fields
      setEmail('');
      setErrors({name: '', email: ''});
    }
  };




  return(
    <>
    <h1>Controlled Form with Validation</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
        type='text'
        id='name'
        value={name}
        onChange={handleNameChange}
        placeholder='Enter your name'
        />
        {errors.name && <p className='error'>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor='email'>Email:</label>
        <input
        type='email'
        id='email'
        value={email}
        onChange={handleEmailChange}
        placeholder='Enter your email'
        />
        {errors.email && <p className='error'>{errors.name}</p>}
      </div>

      <button type='submit'>Submit</button>
    </form>
    
    </>
  );
}


export default ControlledForm;  //export the component
