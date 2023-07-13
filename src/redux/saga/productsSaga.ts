import { call, put, takeEvery } from "redux-saga/effects";
import { getProducts } from "../actions";
import { ActionTypes } from "../types";

function* productsWorker(): any {
  const request = yield call(fetch, "https://dummyjson.com/products");
  const response = yield call([request, request.json]);
  console.log(response);
  yield put(getProducts(response));
}

export function* productsWatcher() {
  yield takeEvery(ActionTypes.GET_PRODUCTS_WATCHER, productsWorker);
}
