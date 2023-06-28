import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home/HomePage.jsx';
import About from './pages/About/AboutPage.jsx';
import Details from './pages/Details/DetailsPage.jsx';
import Error from './pages/Error/ErrorPage.jsx';
import '../src/styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Routes>            
        </Router>    
  </React.StrictMode>
);
