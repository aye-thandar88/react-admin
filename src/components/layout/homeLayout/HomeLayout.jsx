import React from "react";
import styles from "./HomeLayout.module.css";
import Navbar from "../../common/header/Navbar";

const HomeLayout = ({ children, className }) => {
  return (
    <div className={className}>
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
