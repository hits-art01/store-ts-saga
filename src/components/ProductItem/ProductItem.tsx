import React, { FC } from "react";
import "./product-item.scss";
import ProductCover from "./ProductCover";

interface Product {
  title: string;
  price: number;
  category: string;
  thumbnail: string;
}

export interface ProductProps {
  product: Product;
}

const ProductItem: FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-column">
      <div className="cart-hover">
        <div className="cart-hover__cont">
          <button className="cart-button">Add to cart</button>
        </div>
      </div>
      <div className="black">
        <div className="product-item__content">
          <div className="product-item__img">
            <ProductCover product={product} />
          </div>

          <div className="product-item__text">
            <div className="product-item__title">{product.title}</div>
            <div className="product-item__description">{product.category}</div>
          </div>
          <div className="product-item__price">{product.price} $</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
