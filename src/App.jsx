import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Charity from './components/Charity';
import FanCard from './components/FanCard';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Navbar from './components/NavBar';
import CardPage from './pages/CardPage';
import CongratulationPage from './pages/CongratulationPage';
import MeetAndGreet from './pages/MeetAndGreet';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';

function App() {

  
    return (
      <Router basename="">
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/fancard" element={<FanCard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cardpage" element={<CardPage />} />
            <Route path="/congratulation" element={<CongratulationPage />} />
            <Route path="/meetandgreet" element={<MeetAndGreet />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
      </Router>
    );
  }
  
  export default App;