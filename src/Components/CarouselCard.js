import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CarouselCard = (props) => {
  const { plotData } = props;
  // Configure settings for the carousel
  const carouselSettings = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 3 // Number of slides to scroll when next/previous buttons are clicked
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 3
      }
    },
    arrows: true, // Show navigation arrows
    draggable: true, // Allow dragging to scroll
    infinite: true, // Enable infinite loop
    autoPlay: false, // Disable autoplay
    autoPlaySpeed: 1000, // Delay between auto slides (ms)
    keyBoardControl: true, // Allow keyboard navigation
    customTransition: "all .5", // Transition duration and timing function
    transitionDuration: 500, // Duration of slide transition (ms)
    containerClass: "carousel-container", // Additional class for the carousel container
    dotListClass: "custom-dot-list", // Additional class for the dot list
    itemClass: "carousel-item", // Additional class for each carousel item
    centerMode: false, // Disable center mode,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };

  return (
    <div className="shadow-lg md:h-96 md:w-80 sm:h-80 sm:w-56 h-72 w-48 rounded-lg m-4 cursor-pointer">
      <Carousel {...carouselSettings}>
        {plotData.land_media.map((media, index) => (
          <div key={index} className="">
            <img className="md:w-80 md:h-52 h-36 w-44 rounded-t-lg" alt={`plot img ${index}`} src={media.image} />
          </div>
        ))}
      </Carousel>
      <div className="mt-2">
        <h2 className="font-bold">{plotData?.village_name}, {plotData?.mandal_name}</h2>
        <h2 className="font-bold">{plotData?.district_name} (dt)</h2>
        <div className="flex items-center">
          <h3 className="font-bold">{plotData?.total_land_size} guntas.</h3>
          <p> ₹ {Math.round(plotData?.total_price * 2) / 2} lakh for full property</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
