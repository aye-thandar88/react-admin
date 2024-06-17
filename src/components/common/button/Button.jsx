import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : styles.default}`}
    >
      {children}
    </button>
  );
};

export default Button;
