import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { ProtectedRoute, PublicRoute } from "../utils/routes";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const Features = lazy(() => import("../pages/features/Features"));
const Pricing = lazy(() => import("../pages/pricing/Pricing"));
const Works = lazy(() => import("../pages/works/Works"));
const Login = lazy(() => import("../pages/login/Login"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Brands = lazy(() => import("../pages/brand/brand"));
const Error = lazy(() => import("../pages/error/Error"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/contact", element: <Contact /> },
      { path: "/features", element: <Features /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/ourworks", element: <Works /> },
      { path: "/brands", element: <Brands /> },
    ],
  },
]);
