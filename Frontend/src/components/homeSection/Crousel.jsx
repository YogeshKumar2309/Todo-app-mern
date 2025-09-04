// import { useEffect, useState } from "react";

// const Crousel = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [touchStartX, setTouchStartX] = useState(0);
//   const [touchEndX, setTouchEndX] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000000000); // 2 second

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const handleTouchStart = (e) => {
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEndX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStartX - touchEndX > 50) {
//       // swipe left
//       setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     } else if (touchEndX - touchStartX > 50) {
//       // swipe right
//       setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     }
//   };
//   return (
//     <div
//       className="overflow-hidden w-full relative"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className={`min-w-[100%] mt-4 `}>
//             {slide.component}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Crousel;

import { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="relative w-full h-full">
      {/* Slides Container */}
      <div
        className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg h-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`w-full flex-shrink-0 ${slide.bgColor} `}
              style={{
                backgroundImage: `${slide.bgImg}`
                  ? `linear-gradient(rgba(245, 203, 203, 0.7), rgba(245, 203, 203, 0.7)), url(${slide.bgImg})`
                  : "",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex items-center justify-center h-full p-4 md:p-6 opacity-80">
                {slide.component}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#2b2b2b] p-1.5 md:p-2 rounded-full shadow-md hover:bg-white transition-all"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#2b2b2b] p-1.5 md:p-2 rounded-full shadow-md hover:bg-white transition-all"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicators - Smaller on mobile */}
      <div className="flex justify-center mt-3 space-x-1.5 md:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 w-4 md:h-2 md:w-6 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-[#2b2b2b] md:w-8" : "bg-[#9ECAD6]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
