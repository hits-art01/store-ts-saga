import { spawn } from "redux-saga/effects";
import { productsWatcher } from "./productsSaga";
import { currentProductWatcher } from "./currentSaga";

export function* rootSaga() {
  yield spawn(productsWatcher);
  yield spawn(currentProductWatcher);
}
