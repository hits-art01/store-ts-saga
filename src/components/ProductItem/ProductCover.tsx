import React, { FC } from "react";
import "./product-item.scss";
import { ProductProps } from "./ProductItem";

const ProductCover: FC<ProductProps> = ({ product }) => {
  return (
    <div
      className="product-item__image"
      style={{
        backgroundImage: `url(${product.thumbnail})`,
      }}
    />
  );
};

export default ProductCover;
