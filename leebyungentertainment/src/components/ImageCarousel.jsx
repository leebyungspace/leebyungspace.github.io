import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  "src/assets/lee1.jpg",
  "src/assets/lee2.jpg",
  "src/assets/lee3.jpg",
  "src/assets/lee4.jpg",
  "src/assets/lee5.jpg",
  "src/assets/lee6.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-60 max-w-md mx-auto lg:w-full overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-auto rounded-xl object-cover transition duration-500"
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-10 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-10 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
