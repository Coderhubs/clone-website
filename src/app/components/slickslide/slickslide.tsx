"use client"; // This line is necessary for Next.js app directory
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";

const SlickSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i:number) => (
      <div className="text-center">
        <span className="text-gray-500  text-2xl"> __ </span> {/* Dash instead of dot */}
      </div>
    ),
    appendDots: (dots:React.ReactNode) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const slides = [
    { src: "/image/slide show 1.jpg", alt: "Students learning Web3 basics" },
    { src: "/image/slide show 2.jpg", alt: "President launching the PIAIC website" },
    { src: "/image/slide show 3.jpg", alt: "First meeting with the President" },
    { src: "/image/slide show 4.jpg", alt: "Another Event" },
    { src: "/image/slide show 5.jpg", alt: "Another Event" },
    { src: "/image/slide show 6.jpg", alt: "Another Event" },
    { src: "/image/slide show 7.jpg", alt: "Another Event" },
    { src: "/image/slide show 8.jpg", alt: "Another Event" },
  ];

  return (
    <div className="mt-20 mb-20 w-full flex justify-center items-center">
      <div className="w-full max-w-4xl"> 
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer">
                <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                  <img
                    alt={slide.alt}
                    loading="lazy"
                    width="100%"
                    height="auto"
                    decoding="async"
                    className="items-center w-full h-[300px] md:h-[600px] object-cover"
                    src={slide.src}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlickSlide;
