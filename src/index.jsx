import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home/HomePage.jsx';
import IsAbout from './pages/About/AboutPage.jsx';
import Details from './pages/Details/DetailsPage.jsx';
import Error from './pages/Error/ErrorPage.jsx';
import '../src/styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<IsAbout />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={<Error />} />
              </Routes>
          <Footer />            
      </Router>    
  </React.StrictMode>
);
