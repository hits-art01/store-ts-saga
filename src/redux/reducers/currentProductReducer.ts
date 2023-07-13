import { ProductType } from "../types";
import { ActionTypes } from "../types";

const initialState = {
  currentProduct: {},
};

export interface CurrentProductAction {
  type: ActionTypes.CURRENT_PRODUCT;
  payload: ProductType;
}

export const currentProductReducer = (
  state = initialState,
  action: CurrentProductAction
) => {
  switch (action.type) {
    case ActionTypes.CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };
    default:
      return state;
  }
};
