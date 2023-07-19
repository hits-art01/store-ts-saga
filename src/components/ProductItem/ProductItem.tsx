import React, { FC } from "react";
import "./product-item.scss";
import ProductCover from "./ProductCover";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { currentProductWatcher } from "../../redux/saga/currentSaga";
import {
  deleteItemFromCart,
  addItemToCart,
  getCurrentWatch,
} from "../../redux/actions";

import { ProductType } from "../../redux/types";
import { useTypesSelector } from "../../hooks/useTypesSelector";

export interface ProductProps {
  product: ProductType;
}

const ProductItem: FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useTypesSelector((state) => state.cart.items);
  const isIteminCart = items.some((item) => item.id === product.id);

  function pageClick() {
    navigate(`/product/${product.title}`);
    dispatch(getCurrentWatch(product));
  }
  function addToCartClick(e: { stopPropagation: () => void }) {
    e.stopPropagation();

    if (isIteminCart) {
      dispatch(deleteItemFromCart(product.id));
    } else {
      dispatch(addItemToCart(product));
    }
  }

  return (
    <div className="product-column">
      <div className="cart-hover">
        <div className="cart-hover__cont" onClick={pageClick}>
          <button
            className={isIteminCart ? "cart-button-in" : "cart-button"}
            onClick={addToCartClick}
          >
            {isIteminCart ? "Delete from cart" : "Add to cart"}
          </button>
        </div>
      </div>
      <div className="black">
        <div className="product-item__content" onClick={pageClick}>
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
