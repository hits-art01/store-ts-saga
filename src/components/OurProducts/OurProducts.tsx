import React, { FC, useEffect } from "react";
import "./our-products.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../redux/types";
import { getProductsWatch } from "../../redux/actions";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { Link } from "react-router-dom";

const OurProducts: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsWatch());
  }, []);
  const products = useTypesSelector((state) => state.products.products);

  return (
    <div className="our-products">
      <div className="our-products__container _container">
        <div className="our-products__content">
          <div className="our-products__text">
            <div className="our-products__title">Our Products</div>
          </div>
          <div className="our-products__items item">
            {products.slice(0, 8).map((product: any) => (
              <ProductItem key={product.title} product={product} />
            ))}
          </div>
          <div className="our-products__all">
            <div className="our-products__btn">
              <Link to={"/Shop"} className="our-products__btn-link">
                Show All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
