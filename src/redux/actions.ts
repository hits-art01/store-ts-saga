import { ProductProps } from "../components/ProductItem/ProductItem";
import { ActionTypes } from "./types";
import { ProductType } from "./types";

export const getProducts = (payload: ProductProps) => ({
  type: ActionTypes.GET_PRODUCTS,
  payload,
});
export const getProductsWatch = () => ({
  type: ActionTypes.GET_PRODUCTS_WATCHER,
});

export const getCurrentProduct = (payload: ProductType) => ({
  type: ActionTypes.CURRENT_PRODUCT,
  payload,
});
export const getCurrentWatch = (payload: ProductType) => ({
  type: ActionTypes.CURRENT_PRODUCT_WATCHER,
  payload,
});
export const addItemToCart = (payload: ProductType) => ({
  type: ActionTypes.ADD_TO_CART,
  payload,
});
export const deleteItemFromCart = (payload: number) => ({
  type: ActionTypes.DELETE_FROM_CART,
  payload,
});
