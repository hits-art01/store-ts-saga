import { call, put, takeEvery } from "redux-saga/effects";
import { getComments } from "../actions";
import { ActionTypes } from "../types";

function* commentsWorker(action: any): any {
  const request = yield call(
    fetch,
    `https://dummyjson.com/comments?limit=10&skip=${action.payload}`
  );
  const response = yield call([request, request.json]);
  console.log(response);
  yield put(getComments(response));
}

export function* commentsWatcher() {
  yield takeEvery(ActionTypes.GET_COMMENTS_WATCHER, commentsWorker);
}
