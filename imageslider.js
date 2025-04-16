import React, { useRef, useEffect, useState } from "react";
import "./imageslider.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";

const ImageSlider = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const images = [img1, img2, img3];

  const handleArrowClick = (direction) => {
    const carousel = carouselRef.current;
    const imgWidth = carousel.querySelector("img").clientWidth + 14; // Including margin
    if (direction === "left") {
      carousel.scrollLeft -= imgWidth;
    } else {
      carousel.scrollLeft += imgWidth;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const checkArrowsVisibility = () => {
    const carousel = carouselRef.current;
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    setIsAtStart(carousel.scrollLeft === 0);
    setIsAtEnd(carousel.scrollLeft === scrollWidth);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("mousemove", handleMouseMove);
    carousel.addEventListener("scroll", checkArrowsVisibility);

    return () => {
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("mousemove", handleMouseMove);
      carousel.removeEventListener("scroll", checkArrowsVisibility);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="wrapper">
      <i
        id="left"
        onClick={() => handleArrowClick("left")}
        style={{ display: isAtStart ? "none" : "block" }}
      >
        &#8249;
      </i>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
      >
        {images.map((src, index) => (
          <img src={src} alt={`Slide ${index + 1}`} key={index} draggable="false" />
        ))}
      </div>
      <i
        id="right"
        onClick={() => handleArrowClick("right")}
        style={{ display: isAtEnd ? "none" : "block" }}
      >
        &#8250;
      </i>
    </div>
  );
};

export default ImageSlider;
