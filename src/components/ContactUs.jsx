import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollRevealWrapper from './ScrollRevealWrapper';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setLoading(true);

    try {
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
        setErrors({});
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollRevealWrapper>
        <div className="reveal">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-6 reveal">
              <h2 className="font-bold text-3xl border rounded-b-full p-6 hover:text-gray-500">
                Contact Us
              </h2>
            </div>

            <div className="flex justify-center grid m-6 gap-4 reveal">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className={`p-4 w-80 rounded-full text-black hover:bg-gray-200 ${
                  errors.name ? 'border-2 border-red-500' : ''
                }`}
              />
              {errors.name && <p className="text-red-400">{errors.name}</p>}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className={`p-4 rounded-full text-black hover:bg-gray-200 ${
                  errors.email ? 'border-2 border-red-500' : ''
                }`}
              />
              {errors.email && <p className="text-red-400">{errors.email}</p>}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter a message..."
                required
                className={`resize-none p-4 h-80 rounded-2xl text-black hover:bg-gray-200 ${
                  errors.message ? 'border-2 border-red-500' : ''
                }`}
              />
              {errors.message && <p className="text-red-400">{errors.message}</p>}
            </div>

            <div className="flex justify-center reveal">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 p-4 justify-center rounded-full bg-black text-white uppercase font-bold text-2xl hover:bg-gray-700 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
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
