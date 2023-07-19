import { combineReducers } from "redux";
import { currentProductReducer } from "./currentProductReducer";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { reviewsReducer } from "./reviewsReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  current: currentProductReducer,
  cart: cartReducer,
  reviews: reviewsReducer,
});
