import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ScrollRevealWrapper from './ScrollRevealWrapper';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '670bd432-0b89-4477-8d8e-02d3831109fc', 
        ...formData,
      }),
    });

    if (res.ok) {
      toast.success('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <ScrollRevealWrapper>
        <div className='reveal'>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-center mb-6 reveal'>
              <h2 className='font-bold text-3xl border rounded-b-full p-6 hover:text-gray-500'>Contact Us</h2>
              <hr />
            </div>

            <div className='flex justify-center grid m-6 gap-4 reveal'>
              <input
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Full Name'
                required
                className='p-4 w-80 rounded-full text-black hover:bg-gray-200 '
              />
              <input
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
                className='p-4 rounded-full text-black hover:bg-gray-200'
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='Enter a message...'
                required
                className='resize-none p-4 h-80 rounded-2xl text-black hover:bg-gray-200'
              />
            </div>

            <div className='flex justify-center reveal'>
              <button type='submit' className="flex items-center p-4 justify-center rounded-full bg-black text-white uppercase font-bold text-2xl lg:text-2xl animate-pulse hover:bg-gray-700">
                Submit
              </button>
            </div>
          </form>
          <ToastContainer position="top-center" />
        </div>
      </ScrollRevealWrapper>
    </>
  );
};

export default ContactUs;
