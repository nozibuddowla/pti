import React from "react";
import Header from "../Representational/Header";
import Hero from "../Representational/Hero";
import Popular from "./Popular/Popular";
import Recommended from "./Recommended/Recommended";

const MainComponent = () => {
  return (
    <div className="bg-[#EEEFF0]">
      <div className="max-w-screen-xl mx-auto md:px-4">
        <Header />
        <Hero />
        <Popular />
        <Recommended />
      </div>
    </div>
  );
};

export default MainComponent;
