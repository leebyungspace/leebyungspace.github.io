import React from 'react';


const images = [
  "src/assets/lee1.jpg",
  "src/assets/lee2.jpg",
  "src/assets/lee3.jpg",
  "src/assets/lee4.jpg",
  "src/assets/lee5.jpg",
  "src/assets/lee6.jpg",
];

const Gallery = () => {

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      </div>
    </div>
  );
};

export default Gallery;
