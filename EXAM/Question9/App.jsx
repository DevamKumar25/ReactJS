/* 
demostrate how to pass query paramters routes in react app.
display the parametsr on the destinations page
*/


/*
we'll pass query paramters from route(home) to another
(details) using the URL . We will use useNavigate 
hook to navigate and the useLocation hook to access
query parametsr on the destination page
*/


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import './App.css'; // Import the global CSS

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home?name=JohnDoe&age=30">Go to Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
