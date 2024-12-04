/*
Implement a form in React that submit data using a POST
request via Fetch API Display the submitted data on the console
*/


import React , {useState} from 'react';

function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  // HANDLE FORM SUBMISSION

  const handleSubmit = (event) => {
    event.preventDefault();


    const formData = {name,email};

    fetch('https://jsonplaceholder.typicode.com/posts',{
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Submitted data',data);
      alert('Data submitted successfully');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to submit data.');
    })

    setName('');
    setEmail('');

  };




  return (
    <>
    <h1>Submit form via POST Request</h1>

    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor='name'>Name:</label>
      <input
      type='text'
      id='name'
      value={name}
      onChange={handleNameChange}
      placeholder='Enter you name'
      required/>
      </div>


      <div>
      <label htmlFor='email'>email:</label>
      <input
      type='email'
      id='email'
      value={email}
      onChange={handleEmailChange}
      placeholder='Enter you email'
      required/>
      </div>

      <button type='submit'>Submit</button>
    </form>
    </>
  )
};
export default App;
