import React, { FC } from "react";
import Header from "../../components/Header/Header";
import "./main.scss";
import AboutAndSlider from "../../components/AboutAndSlider/AboutAndSlider";
import OurProducts from "../../components/OurProducts/OurProducts";
import Footer from "../../components/Footer/Footer";

const Main: FC = () => {
  return (
    <div className="main">
      <Header />
      <AboutAndSlider />
      <OurProducts />
      <Footer />
    </div>
  );
};

export default Main;
