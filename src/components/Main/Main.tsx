import React, { FC } from "react";
import Header from "../Header/Header";
import "./main.scss";
import AboutAndSlider from "../AboutAndSlider/AboutAndSlider";
import OurProducts from "../OurProducts/OurProducts";

const Main: FC = () => {
  return (
    <div className="main">
      <Header />
      <AboutAndSlider />
      <OurProducts />
    </div>
  );
};

export default Main;
