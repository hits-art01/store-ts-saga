import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./about.scss";
import { getProductsWatch } from "../../redux/actions";
import Cover from "../../imgs/Cover2.jpg";
import { useNavigate } from "react-router";

const AboutAndSlider: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
                    Discover Our New Collection
                  </div>
                  <div className="about__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </div>
                </div>
                <button
                  className="about__btn"
                  onClick={() => navigate("/shop")}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-block__image _ibg">
        <img src={Cover} alt="bg" />
      </div>
    </div>
  );
};

export default AboutAndSlider;
