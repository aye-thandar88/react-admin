import React from "react";
import styles from "./Footer.module.css";
import NavList from "../header/NavList";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div></div>
      <hr />
      <div>
        <NavList />
        <span>© 2017 Designmodo. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
