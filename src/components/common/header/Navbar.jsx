import React from "react";
import NavList from "./NavList";
import styles from "./Header.module.css";
import Button from "../button/Button";
import useAuth from "../../../hooks/useAuth";

const Navbar = ({ onClick }) => {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.navbar}>
      <NavList />
      {isAuthenticated && (
        <div className={styles.logOut_btn_container}>
          <img
            src="../../src/assets/svg/client2.svg"
            alt="userImg"
            loading="lazy"
            className={styles.user_icon}
          />
          <Button className={styles.logOut_btn} onClick={onClick}>
            logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
