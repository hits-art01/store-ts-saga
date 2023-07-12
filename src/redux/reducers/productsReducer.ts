import { ActionTypes } from "../types";

const initialState = {
  products: [],
};

export interface FetchProductsAction {
  type: ActionTypes.GET_PRODUCTS;
  payload: any[];
}

export const productsReducer = (
  state = initialState,
  action: FetchProductsAction
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
