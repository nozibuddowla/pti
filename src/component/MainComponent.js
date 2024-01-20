import React from "react";
import Popular from "./Popular/Popular";
import Recommended from "./Recommended/Recommended";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const MainComponent = () => {
  return (
    <div className="bg-[#EEEFF0] ">
      <div className="max-w-screen-xl mx-auto md:px-4">
        <Header />
        <Hero />
        <Popular />
        <Recommended />
        <Footer />
      </div>
    </div>
  );
};

export default MainComponent;
