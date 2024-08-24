import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedElement from './AnimatedElement';


const ImageCarousel = ({ images, animationType, duration = 1, threshold = 0.1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isInView, images.length]);

  return (
    <div ref={carouselRef} className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <AnimatedElement
          key={currentIndex}
          animationType={animationType}
          duration={duration}
          threshold={threshold}
        >
          <div>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={images[currentIndex].width}
              height={images[currentIndex].height}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </AnimatedElement>
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;