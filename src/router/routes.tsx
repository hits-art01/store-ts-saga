import Main from "../pages/Main/Main";
import ProductPage from "../pages/ProductPage/ProductPage";
import Shop from "../pages/Shop/Shop";

export interface RouteType {
  path: string;
  element: React.ReactNode;
}

export type RoutesType = RouteType[];

export const routes: RoutesType = [
  { path: "/", element: <Main /> },
  { path: "/product/:title", element: <ProductPage /> },
  { path: "/shop", element: <Shop /> },
];
