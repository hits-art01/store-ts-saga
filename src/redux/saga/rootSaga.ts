import { spawn } from "redux-saga/effects";
import { productsWatcher } from "./productsSaga";
import { currentProductWatcher } from "./currentSaga";
import { commentsWatcher } from "./reviewsSaga";

export function* rootSaga() {
  yield spawn(productsWatcher);
  yield spawn(currentProductWatcher);
  yield spawn(commentsWatcher);
}
