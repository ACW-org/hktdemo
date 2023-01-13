import React from "react";
import HFTCarousel from "../component/carousel";

const Home = () => {
  return (
    <div className="container mx-auto pt-[10px]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <HFTCarousel />
    </div>
  );
};

export default Home;
