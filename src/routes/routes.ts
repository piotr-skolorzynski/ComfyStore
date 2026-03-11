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

export const routes = [
  {
    path: "/",
    Component: HomeLayout,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: Landing,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "products/:id",
        Component: SingleProduct,
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
  },
] as RouteObject[];
