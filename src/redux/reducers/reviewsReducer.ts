import { ActionTypes } from "../types";

interface commentsType {
  comments: any[];
}

const initialState: commentsType = {
  comments: [],
};

export interface FetchReviewsAction {
  type: ActionTypes.GET_COMMENTS;
  payload: any[];
}

export const reviewsReducer = (
  state = initialState,
  action: FetchReviewsAction
) => {
  switch (action.type) {
    case ActionTypes.GET_COMMENTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
