import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Importing components
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Jayasasirekha's Portfolio</h1>
          <p>AI & Data Science Enthusiast</p>
        </header>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Routing Pages */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="App-footer">
          <p>&copy; 2025 Jayasasirekha. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
