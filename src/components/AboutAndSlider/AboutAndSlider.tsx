import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./aboutslider.scss";
import { getProductsWatch } from "../../redux/actions";

const AboutAndSlider: FC = () => {
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then(console.log);
  //   }, []);

  return (
    <div className="about-and-slider">
      <div className="about-and-slider__container _container">
        <div className="about-and-slider__content">
          <div className="about">
            <div className="about__box">
              <div className="about__content">
                <div className="about__text">
                  <div className="about__caption">Lorem, ipsum.</div>
                  <div className="about__title">
                    Discover Our <br /> New Collection
                  </div>
                  <div className="about__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </div>
                </div>
                <button className="about__btn">Buy now</button>
              </div>
            </div>
          </div>
          <div className="slider"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndSlider;