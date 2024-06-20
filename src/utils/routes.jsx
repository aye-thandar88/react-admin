import { useLocalStorage } from "../hooks/useLocalStorage";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
  return <Outlet />;
};

const ProtectedRoute = () => {
  const [isAuthenticated] = useLocalStorage("isAuthenticated");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export { ProtectedRoute, PublicRoute };
