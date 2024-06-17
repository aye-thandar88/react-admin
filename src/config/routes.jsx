import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const Features = lazy(() => import("../pages/features/Features"));
const Pricing = lazy(() => import("../pages/pricing/Pricing"));
const Works = lazy(() => import("../pages/works/Works"));
const Login = lazy(() => import("../pages/login/Login"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Brands = lazy(() => import("../pages/brand/brand"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/ourworks",
    element: <Works />,
  },
  {
    path: "/brands",
    element: <Brands />,
  },
]);
