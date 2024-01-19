import React from "react";
import Header from "../Representational/Header";
import Hero from "../Representational/Hero";

const MainComponent = () => {
  return (
    <div className="bg-[#EEEFF0]">
      <div className="max-w-screen-xl mx-auto md:px-4">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default MainComponent;
