/*
Create a React components that uses the useEffect hook to fetch and display
data from an API when the components is mounted
*/


import React, { useState, useEffect } from 'react';

function App() {
  // State variables for posts
  const [posts, setPosts] = useState(null);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [errorPosts, setErrorPosts] = useState(null);

  // State variables for users
  const [users, setUsers] = useState(null);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [errorUsers, setErrorUsers] = useState(null);

  // Fetch posts data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok for posts');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoadingPosts(false);
      })
      .catch((error) => {
        setErrorPosts(error.message);
        setLoadingPosts(false);
      });
  }, []);

  // Fetch users data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok for users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoadingUsers(false);
      })
      .catch((error) => {
        setErrorUsers(error.message);
        setLoadingUsers(false);
      });
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      
      {/* Posts Section */}
      <h2>Posts</h2>
      {loadingPosts && <p>Loading posts...</p>}
      {errorPosts && <p style={{ color: 'red' }}>Error: {errorPosts}</p>}
      {posts && (
        <ul>
          {posts.slice(0, 10).map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Users Section */}
      <h2>Users</h2>
      {loadingUsers && <p>Loading users...</p>}
      {errorUsers && <p style={{ color: 'red' }}>Error: {errorUsers}</p>}
      {users && (
        <ul>
          {users.map((user) => (
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
