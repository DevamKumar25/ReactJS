import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // State variables for data, loading, and error
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Perform GET request with Axios
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Set data and stop loading
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError('Error fetching data');
        setLoading(false);
      });
  }, []); // Empty dependency array ensures it runs only once on mount

  // JSX for rendering the component
  return (
    <div className="App">
      <h1>Fetched Data from API (Posts)</h1>

      {/* Show loading text */}
      {loading && <p>Loading...</p>}

      {/* Show error message if there was an issue */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Show fetched data if available */}
      {data.length > 0 && (
        <ul>
          {data.map((user) => ( // Display only the first 10 posts
            <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
                <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
          </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
