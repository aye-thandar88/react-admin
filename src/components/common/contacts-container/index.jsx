import React, { useState } from "react";
import styles from "./style.module.css";
import Label from "../label/Label";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import NewDM from "./compnents/new-dm";

const ContactsContainer = () => {
  const navigate = useNavigate();

  const onClickHomeBtn = () => {
    navigate("/");
  };

  return (
    <div className={styles.contact_container}>
      <div>
        <div className={styles.title_container}>
          <Button className={styles.toggle_menu}>
            <FaBars />
          </Button>
          <img
            src="../src/assets/img/logo.jpg"
            alt="feature1"
            className={styles.logo_img}
            loading="lazy"
          />
          <h2>Syncronus</h2>
        </div>
        <div className={styles.menu_container}>
          <Label className={styles.label}>Direct Message</Label>
          <NewDM />
        </div>
        <div className={styles.menu_container}>
          <Label className={styles.label}>Channels</Label>
        </div>
      </div>
      <div className={styles.footer_container}>
        <Button className={styles.home_btn} onClick={onClickHomeBtn}>
          Go back Home
        </Button>
      </div>
    </div>
  );
};

export default ContactsContainer;
