import React from "react";
import styles from "./Header.module.css";

const NavList = () => {
  const lists = [
    "Home",
    "Features",
    "Pricing",
    "Our Works",
    "Our Clients",
    "Chat",
    "Contact",
  ];
  return (
    <ul className={styles.nav_container}>
      {lists?.map((list, index) => (
        <a
          href={`/${list.replace(" ", "")}`}
          className={styles.link}
          key={index}
        >
          <li className={styles.nav_li}>{list}</li>
        </a>
      ))}
    </ul>
  );
};

export default NavList;
