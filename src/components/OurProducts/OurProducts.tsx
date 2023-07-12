import React, { FC, useEffect } from "react";
import "./our-products.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../redux/types";
import { getProductsWatch } from "../../redux/actions";
import { useTypesSelector } from "../../hooks/useTypesSelector";

const OurProducts: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsWatch());
  }, []);
  const products = useTypesSelector((state) => state.products);
  return (
    <div className="our-products">
      <div className="our-products__container _container">
        <div className="our-products__content">
          <div className="our-products__text">
            <div className="our-products__title">Our Products</div>
          </div>
          <div className="our-products__items item">
            {products.map((product: any) => (
              <ProductItem key={product.title} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
