import React, { useState, useEffect } from 'react';

// Image Slider Component
const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={image} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;