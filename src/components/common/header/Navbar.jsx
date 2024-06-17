import React from "react";
import NavList from "./NavList";
import styles from "./Header.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavList />
    </div>
  );
};

export default Navbar;
