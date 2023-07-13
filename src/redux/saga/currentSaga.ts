import { put, takeEvery } from "redux-saga/effects";
import { getCurrentProduct, getCurrentWatch } from "../actions";
import { CurrentProductAction } from "../reducers/currentProductReducer";
import { ActionTypes } from "../types";

function* currentSagaWorker(action: CurrentProductAction) {
  yield put(getCurrentProduct(action.payload));
  console.log(action);
}

export function* currentProductWatcher() {
  yield takeEvery(ActionTypes.CURRENT_PRODUCT_WATCHER, currentSagaWorker);
}
