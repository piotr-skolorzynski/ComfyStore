import type { RouteObject } from "react-router";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "../pages";
import { ErrorElement } from "../components";
// loaders
import {
  featuredProductsLoader,
  productsLoader,
  singleProductLoader,
} from "../loaders";

//actions
import { registerUserAction } from "../actions";

export const routes = [
  {
    path: "/",
    Component: HomeLayout,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: Landing,
        ErrorBoundary: ErrorElement,
        loader: featuredProductsLoader,
      },
      {
        path: "products",
        Component: Products,
        ErrorBoundary: ErrorElement,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        Component: SingleProduct,
        ErrorBoundary: ErrorElement,
        loader: singleProductLoader,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "checkout",
        Component: Checkout,
      },
      {
        path: "orders",
        Component: Orders,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
    ErrorBoundary: Error,
  },
  {
    path: "/register",
    Component: Register,
    ErrorBoundary: Error,
    action: registerUserAction,
  },
] as RouteObject[];
