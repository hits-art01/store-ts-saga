import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import { productsWatcher } from "./saga/productsSaga";
import { productsReducer } from "./reducers/productsReducer";

const saga = createSagaMiddleware();

export type RootState = ReturnType<typeof productsReducer>;

export const store = createStore(
  productsReducer,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(productsWatcher);
