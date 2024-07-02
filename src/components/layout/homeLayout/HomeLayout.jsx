import React from "react";
import styles from "./HomeLayout.module.css";
import Navbar from "../../common/header/Navbar";
import useAuth from "../../../hooks/useAuth.js";
import { logoutMsg } from "../../../assets/constant/message.js";
import useToast from "../../../hooks/useToast.js";

const HomeLayout = ({ children, className }) => {
  const { logout } = useAuth();
  const { showToast } = useToast();

  const handleLogout = () => {
    showToast(logoutMsg);
    logout();
  };

  return (
    <div className={className}>
      <Navbar onClick={handleLogout} />
      {children}
    </div>
  );
};

export default HomeLayout;
