import React from "react";
import NavList from "./NavList";
import styles from "./Header.module.css";
import Button from "../button/Button";
import { useAuth } from "../../../context/AuthContext";

const Navbar = ({ onClick }) => {
  const { isAuthenticated, userInfo } = useAuth();

  console.log("userInfo", userInfo);

  return (
    <div className={styles.navbar}>
      {userInfo && (
        <div className={styles.img_container}>
          <img
            src="../../src/assets/svg/client2.svg"
            alt="userImg"
            loading="lazy"
            className={styles.user_icon}
          />
        </div>
      )}
      <NavList />
      {isAuthenticated && (
        <div className={styles.logOut_btn_container}>
          <Button className={styles.logOut_btn} onClick={onClick}>
            logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
