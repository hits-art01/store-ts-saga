import { combineReducers } from "redux";
import { currentProductReducer } from "./currentProductReducer";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  current: currentProductReducer,
  cart: cartReducer,
});
