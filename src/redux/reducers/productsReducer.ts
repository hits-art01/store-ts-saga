import { act } from "react-dom/test-utils";
import { ActionTypes, LimitSkipTypes, ProductType } from "../types";

interface InitialTypeProducts {
  products: ProductType[];
}

const initialState: InitialTypeProducts = {
  products: [],
};

export interface FetchProductsAction {
  type: ActionTypes.GET_PRODUCTS;
  payload: ProductType[];
}

type productAction = FetchProductsAction;

export const productsReducer = (
  state = initialState,
  action: productAction
) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
