import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
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
