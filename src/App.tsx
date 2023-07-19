import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./router/ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <AppRouter />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
