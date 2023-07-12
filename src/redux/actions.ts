import { ActionTypes } from "./types";

export const getProducts = (payload: any) => ({
  type: ActionTypes.GET_PRODUCTS,
  payload,
});
export const getProductsWatch = () => ({
  type: ActionTypes.GET_PRODUCTS_WATCHER,
});
