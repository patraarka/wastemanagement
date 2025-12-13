import React, { useState, useEffect } from 'react';

// Define the array of images
const images = [
  'src/assets/heroimg1.png',
  'src/assets/heroimg2.png',
  'src/assets/heroimg3.png',
  'src/assets/heroimg4.png',
];

const AutoImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalDuration = 3000; // Change image every 3 seconds (3000ms)

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index using the modulo operator to loop through the array
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default AutoImageCarousel;