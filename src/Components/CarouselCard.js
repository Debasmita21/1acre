import React from "react";
//import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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
    <div className="shadow-lg h-96 w-80 rounded-lg m-4 cursor-pointer">
      <Carousel {...carouselSettings}>
        {plotData.land_media.map((media, index) => (
          <div key={index} className="">
            <img className="w-80 h-52 rounded-t-lg" alt={`plot img ${index}`} src={media.image} />
          </div>
        ))}
      </Carousel>
      <div className="">
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
