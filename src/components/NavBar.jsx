import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full px-4 py-4 flex items-center justify-between bg-black text-white">
      {/* Logo section */}
      <Link to='/'>
      <button>
      <div className="flex flex-col lg:flex-row gap-2">
        <p className="text-xl font-bold">Lee</p>
        <p className="text-xl font-bold">Byung</p>
        <p className="text-xl font-bold">Hun</p>
      </div>
      </button>
      </Link>

      <div>
        <p className="text-2xl font-bold text-yellow-400">Entertainment</p>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-6 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/charity" className="hover:underline">Charity</Link>
        <Link to="/fancard" className="hover:underline">Fan Card</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <CgMenuLeft className="text-3xl" />
        </button>
      </div>

      {/* Mobile Collapsible Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 right-4 bg-white text-black rounded-xl shadow-md p-6 space-y-4 w-56 flex flex-col lg:hidden z-40"
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link to="/charity" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Charity</Link>
          <Link to="/fancard" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Fan Card</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
