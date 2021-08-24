import React from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ImageSlider from "../components/ImageSlider";
import SlideProducts from "../components/SlideProducts";
import AboutUs from "../components/AboutUs";

const Home = ({ type }) => {
  return (
    <>
      <ImageSlider type={type} />
      <SlideProducts />
      <AboutUs />
    </>
  );
};

export default Home;
