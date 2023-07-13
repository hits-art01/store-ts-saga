import { ProductType } from "../types";
import { ActionTypes } from "../types";
import { Reducer } from "redux";

interface ItemsProps {
  items: ProductType[];
}

const initialState: ItemsProps = {
  items: [],
};

export interface CartAddAction {
  type: ActionTypes.ADD_TO_CART;
  payload: ProductType;
}
export interface CartDeleteAction {
  type: ActionTypes.DELETE_FROM_CART;
  payload: number;
}

type CartItemAction = CartAddAction | CartDeleteAction;

export const cartReducer = (state = initialState, action: CartItemAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ActionTypes.DELETE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((p: any) => p.id !== action.payload),
      };

    default:
      return state;
  }
};
