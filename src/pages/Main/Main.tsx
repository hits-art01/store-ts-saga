import React, { FC } from "react";
import Header from "../../components/Header/Header";
import "./main.scss";
import About from "../../components/AboutAndSlider/About";
import OurProducts from "../../components/OurProducts/OurProducts";
import Footer from "../../components/Footer/Footer";

const Main: FC = () => {
  return (
    <div className="main">
      <Header />
      <About />
      <OurProducts />
      <Footer />
    </div>
  );
};

export default Main;
