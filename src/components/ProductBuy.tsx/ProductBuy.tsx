import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { addItemToCart, deleteItemFromCart } from "../../redux/actions";

import { ProductType } from "../../redux/types";

interface BuyProps {
  product: ProductType;
  classNameBtn: string;
}

const ProductBuy: FC<BuyProps> = ({ product, classNameBtn }) => {
  const dispatch = useDispatch();
  const items = useTypesSelector((state) => state.cart.items);
  const isIteminCart = items.some((item) => item.id === product.id);
  function addToCartClick(e: { stopPropagation: () => void }) {
    e.stopPropagation();

    if (isIteminCart) {
      dispatch(deleteItemFromCart(product.id));
    } else {
      dispatch(addItemToCart(product));
    }
  }
  return (
    <button className={classNameBtn} onClick={addToCartClick}>
      {isIteminCart ? "Delete from cart" : "Add to cart"}
    </button>
  );
};

export default ProductBuy;
