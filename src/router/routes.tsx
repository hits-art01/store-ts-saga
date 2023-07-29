import Main from "../pages/Main/Main";
import ProductPage from "../pages/ProductPage/ProductPage";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Contacts from "../pages/Contacts/Contacts";

export interface RouteType {
  path: string;
  element: React.ReactNode;
}

export type RoutesType = RouteType[];

export const routes: RoutesType = [
  { path: "/Home", element: <Main /> },
  { path: "/", element: <Main /> },
  { path: "/product/:title", element: <ProductPage /> },
  { path: "/shop", element: <Shop /> },
  { path: "/cart", element: <Cart /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "*", element: <Main /> },
];
