import React, { FC } from "react";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { ProductType } from "../../redux/types";
import { Link } from "react-router-dom";
import "./link-bar.scss";

const LinkBar: FC = () => {
  const product: any = useTypesSelector(
    (state) => state.current.currentProduct
  );
  return (
    <div className="link-bar">
      <div className="link-bar__container _container">
        <div className="link-bar__content">
          <ul className="link-bar__menu">
            <li className="link-bar__cont">
              <Link className="router-link" to="/Home">
                Home
              </Link>
              {">"}
            </li>
            <li className="link-bar__cont">
              <Link className="router-link" to="/shop">
                Shop
              </Link>
              {">"}
            </li>
          </ul>
          <div className="linl-bar__product-title">{product.title}</div>
        </div>
      </div>
    </div>
  );
};

export default LinkBar;
