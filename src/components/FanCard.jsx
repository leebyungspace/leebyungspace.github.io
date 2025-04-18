import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import leeImage from '../assets/lee7.jpg'; 
import ScrollReveal from 'scrollreveal';

const FanCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    membershipType: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.id]: e.target.value 
    });

    setErrors({
      ...errors,
      [e.target.id]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.membershipType) newErrors.membershipType = 'Please select a membership type';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({ firstName: '', lastName: '', email: '', membershipType: '' });

      navigate('/cardpage');
    }
  };

  useEffect(() => {
    // Initialize ScrollReveal with desired settings
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      scale: 0.9,
      interval: 200,
    });
  }, []);

  return (
    <section className="p-8 min-h-screen">
      {/* Responsive Image */}
      <div className="mb-6 reveal">
        <img 
          src={leeImage} 
          alt="Lee Byung Hun Fan Club" 
          className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-3xl font-bold mb-4 reveal">Fan Card Membership</h2>
      <p className="mb-6 reveal">
        Join the exclusive fan card membership program for behind-the-scenes content, early event access, and more!
      </p>

      {/* Membership Type Selector */}
      <div className="mb-6 reveal">
        <p className="mb-2 font-medium">Choose your type of membership</p>
        <select
          id="membershipType"
          name="membership"
          value={formData.membershipType}
          onChange={handleChange}
          className={`bg-black text-white w-full sm:w-80 border rounded-2xl p-4 ${errors.membershipType ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select Membership Type</option>
          <option value="regular">Regular Membership Card - $650</option>
          <option value="vip">VIP Membership Card - $1,000</option>
          <option value="vvip">VVIP Membership Card - $1,500</option>
        </select>
        {errors.membershipType && <span className="text-sm text-red-500 mt-1">{errors.membershipType}</span>}
      </div>

      {/* Form */}
      <div className="max-w-xl p-6 bg-black rounded-lg shadow-md reveal">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 font-semibold text-gray-400">First Name</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your first name"
            />
            {errors.firstName && <span className="text-sm text-red-500 mt-1">{errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-1 font-semibold text-gray-400">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your last name"
            />
            {errors.lastName && <span className="text-sm text-red-500 mt-1">{errors.lastName}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="email" className="mb-1 font-semibold text-gray-400">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
            />
            {errors.email && <span className="text-sm text-red-500 mt-1">{errors.email}</span>}
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 mt-4 reveal">
            <button
              type="submit"
              className="w-full border hover:bg-gray-700 text-white font-semibold py-2 rounded-full transition duration-200"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FanCard;
