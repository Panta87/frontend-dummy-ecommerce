import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function PhotoSlider() {
  const slides = [
    {
      url: "public/images/image1.jpg",
    },
    {
      url: "public/images/image2.jpg",
    },
    {
      url: "public/images/image3.jpg",
    },

    {
      url: "public/images/image4.jpg",
    },
    {
      url: "public/images/image5.jpg",
    },
    {
      url: "public/images/image6.jpg",
    },
    {
      url: "public/images/image7.jpg",
    },
    {
      url: "public/images/image8.jpg",
    },

    {
      url: "public/images/image9.jpg",
    },
    {
      url: "public/images/image10.jpg",
    },
    {
      url: "public/images/image11.jpg",
    },
    {
      url: "public/images/image12.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const autoPlay = () => {
    nextSlide();
  };

  useEffect(() => {
    const interval = setInterval(autoPlay, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  

  return (
    <div className="max-w-[800px] h-[300px] w-[60%] m-auto py-2 px-2 relative group mb-[15px]">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>
      <div className="flex top-2 justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-xl cursor-pointer mx-1"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoSlider;
