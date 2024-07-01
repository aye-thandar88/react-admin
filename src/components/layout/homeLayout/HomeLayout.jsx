import React from "react";
import styles from "./HomeLayout.module.css";
import Navbar from "../../common/header/Navbar";
import { useLocalStorage } from "../../../hooks/useLocalStorage.js";
import { useNavigate } from "react-router-dom";
import useToast from "../../../hooks/useToast.js";
import { logoutMsg } from "../../../assets/constant/message.js";

const HomeLayout = ({ children, className }) => {
  const [token, setToken, removeToken] = useLocalStorage("token", null);
  const [refreshToken, setRefreshToken, removeRefreshToken] = useLocalStorage(
    "refreshToken",
    null
  );
  const [isAuthenticated, setAuth] = useLocalStorage("isAuthenticated", false);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    removeRefreshToken();
    setAuth(false);
    navigate("/login");
  };

  return (
    <div className={className}>
      <Navbar onClick={handleLogout} />
      {children}
    </div>
  );
};

export default HomeLayout;
