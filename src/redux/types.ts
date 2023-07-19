export enum ActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCTS_WATCHER = "GET_PRODUCTS_WATCHER",
  CURRENT_PRODUCT = "CURRENT_PRODUCT",
  CURRENT_PRODUCT_WATCHER = "CURRENT_PRODUCT_WATCHER",
  ADD_TO_CART = "ADD_TO_CART",
  DELETE_FROM_CART = "DELETE_FROM_CART",
  CHANGE_VISIBLE_CART = "CHANGE_VISIBLE_CART",
  GET_COMMENTS = "GET_COMMENTS",
  GET_COMMENTS_WATCHER = "GET_COMMENTS_WATCHER",
}

export interface ProductType {
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  id: number;
  brand: string;
  rating: number;
  images: string[];
}
