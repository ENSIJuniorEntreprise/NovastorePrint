import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Cadre from "./fondateur";
import { managers } from "../../../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fondateur() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false, // Hide default navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex); // Update activeIndex when a new slide is selected
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % managers.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dotStyle = {
    height: "0.65rem", 
    width: "0.65rem",  
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
    justifyContent: "space-between",
    marginLeft: "0.5rem",
    cursor: "pointer",
  };

  const activeDotStyle = {
    backgroundColor: "black",
    opacity: "0.75", 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        
          <Cadre
            image={managers[activeIndex].image}
            text={managers[activeIndex].text}
            name={managers[activeIndex].name}
            status={managers[activeIndex].status}
          />
      </Slider>
      <div className="circless">
        {managers.map((_, index) => (
          <span
            key={index}
            style={{
              ...dotStyle,
              ...(index === activeIndex ? activeDotStyle : {}),
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Fondateur;
