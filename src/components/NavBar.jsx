import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full px-4 py-4 bg-black text-white flex justify-center">
      {/* Responsive Nav */}
      <nav className="flex flex-col gap-2 items-center w-full max-w-4xl lg:flex-row lg:justify-between">
        <Link to="/" className="hover:bg-gray-600 text-center border rounded-2xl p-3 w-full lg:w-auto">Home</Link>
        <Link to="/charity" className="hover:bg-gray-600 text-center border rounded-2xl p-3 w-full lg:w-auto">Charity</Link>
        <Link to="/fancard" className="hover:bg-gray-600 text-center border rounded-2xl p-3 w-full lg:w-auto">Fan Card</Link>
        <Link to="/about" className="hover:bg-gray-600 text-center border rounded-2xl p-3 w-full lg:w-auto">About</Link>
        <Link to="/contact" className="hover:bg-gray-600 text-center border rounded-2xl p-3 w-full lg:w-auto">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
