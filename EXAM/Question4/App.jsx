/*
Create a simple React app with routing. Add three pages : Home,
About and contact. Nvaigate between these pages using React Router
*/


import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return(
    <Router>
      <div>
        {/*Navigation Link
          BrowserRouter as Router: 
          This component wraps the entire app and enables routing. */}
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='About'>About</Link></li>
            <li><Link to='Contact'>Contact</Link></li>
          </ul>
        </nav>

        {/* Define Routes
         Routes: This component defines a collection of Route elements
         Route: This component defines a single route. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
