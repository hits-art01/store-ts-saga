import React, { FC } from "react";
import "./banner.scss";
import Cover from "../../imgs/Cover2.jpg";
import { Link } from "react-router-dom";

interface BannerProps {
  title: string;
}

const Banner: FC<BannerProps> = ({ title }) => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__info">
          <div className="banner__title">{title}</div>
          <ul className="banner__links">
            <li className="banner__link">Home</li>
            <li className="arrow">{">"}</li>
            <li className="banner__link main">{title}</li>
          </ul>
        </div>
      </div>
      <div className="banner__image _ibg">
        <img src={Cover} alt="bg" />
      </div>
    </div>
  );
};

export default Banner;
