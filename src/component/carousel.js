import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-carousel-minimal";

const HFTCarousel = () => {
  const slideData = [
    {
      image: "./././Pictures/2212-024_細嚐幸福滋味_landing_page_04_op.jpg",
      caption: "",
    },
    {
      image: "./././Pictures/promotion1.png",
      caption: "",
    },
  ];

  return (
    <div>
      {/* <div> */}
      <Carousel
        data={slideData}
        time={2000}
        width="100vw"
        height="45vh"
        // radius="10px"
        // slideNumber={true}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
      />
      {/* </div> */}
    </div>
  );
};

export default HFTCarousel;
