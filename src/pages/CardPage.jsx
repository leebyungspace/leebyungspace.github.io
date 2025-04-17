import React, { useState } from 'react';
import leeImage from '../assets/lee7.jpg';
import { FiUploadCloud } from "react-icons/fi";
import { Link } from 'react-router-dom'; // Make sure you're using react-router-dom

const CardPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [fileSelected, setFileSelected] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileSelected(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <section className="p-6 max-w-2xl rounded-lg mx-auto shadow-md">
      {/* Image */}
      <div className="mb-6">
        <img
          src={leeImage}
          alt="Lee Byung Hun Fan Club"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>

      {/* Payment Method Select */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Select a payment option:</label>
        <select
          value={selectedMethod}
          onChange={handleChange}
          className="w-full p-3 border bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select</option>
          <option value="crypto">Crypto</option>
          <option value="giftcard">Gift Card</option>
        </select>
      </div>

      {/* Crypto Details */}
      {selectedMethod === 'crypto' && (
        <div className="p-4 rounded-md mt-4 bg-black text-white">
          <h3 className="text-lg font-semibold mb-2">Crypto Payment Instructions</h3>
          <p className="text-sm mb-1">Please send the required amount to the wallet address below:</p>
          <p className="text-blue-400 font-mono text-sm break-words">(your wallet address here)</p>
        </div>
      )}

      {/* Gift Card Details */}
      {selectedMethod === 'giftcard' && (
        <div className="p-4 rounded-md mt-4 bg-black text-white">
          <h3 className="text-lg font-semibold mb-2">Gift Card Instructions</h3>
          <p className="text-sm">Please send the gift card code and amount to the following email:</p>
          <p className="text-blue-400 font-semibold">your-email@example.com</p>
        </div>
      )}

      {/* File Upload with Preview */}
      <div className="max-w-md mx-auto mt-6 p-4 rounded-lg shadow-md">
        <form>
          <label
            htmlFor="file-input"
            className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition relative"
          >
            {!imagePreview ? (
              <>
                <FiUploadCloud className="text-4xl text-blue-600 mb-2" />
                <p className="text-sm font-semibold text-gray-700 mb-1">Attach Photo Proof of Payment</p>
                <span className="text-xs text-gray-500">Accepted formats: JPG, PNG</span>
              </>
            ) : (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-h-60 object-contain rounded-md"
              />
            )}
            <input
              type="file"
              id="file-input"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </form>
      </div>

      {/* Proceed Button */}
      <div className="flex justify-center mt-6">
        {fileSelected ? (
          <Link to="/congratulation">
            <button className="w-60 p-4 rounded-full text-white font-semibold bg-blue-600 hover:bg-blue-700 transition duration-200">
              Proceed
            </button>
          </Link>
        ) : (
          <button
            className="w-60 p-4 rounded-full text-white font-semibold bg-gray-400 cursor-not-allowed"
            disabled
          >
            Proceed
          </button>
        )}
      </div>
    </section>
  );
};

export default CardPage;
