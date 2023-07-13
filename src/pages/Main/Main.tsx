import React, { FC } from "react";
import Header from "../../components/Header/Header";
import "./main.scss";
import AboutAndSlider from "../../components/AboutAndSlider/AboutAndSlider";
import OurProducts from "../../components/OurProducts/OurProducts";

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
