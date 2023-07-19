import React, { FC, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { RouteType, RoutesType, routes } from "./routes";

const AppRouter: FC = () => {
  return (
    <Routes>
      {routes.map((route: RouteType) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
