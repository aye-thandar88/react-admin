import React from "react";
import NavList from "./NavList";
import styles from "./Header.module.css";
import Button from "../button/Button";

const Navbar = ({ onClick }) => {
  return (
    <div className={styles.navbar}>
      <NavList />
      <div className={styles.logOut_btn_container}>
        <Button className={styles.logOut_btn} onClick={onClick}>
          logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
