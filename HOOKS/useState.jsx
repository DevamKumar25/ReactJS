import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData, // Spread the previous state
      [name]: value, // Dynamically set the field using the name
    }));
  };

  return (
    <>
      <form>
        <input
          name="username"
          onChange={handleChange}
          placeholder="Enter your name"
          value={form.username}
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          value={form.email}
        />
        <p>{JSON.stringify(form)}</p>
      </form>
    </>
  );
}

export default App;
