import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import { productsWatcher } from "./saga/productsSaga";
import { productsReducer } from "./reducers/productsReducer";
import { rootReducer } from "./reducers/rootReducer";
import { rootSaga } from "./saga/rootSaga";

const saga = createSagaMiddleware();

export type RootState = ReturnType<typeof store.getState>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);
