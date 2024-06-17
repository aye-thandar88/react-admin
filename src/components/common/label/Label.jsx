import React from "react";
import styles from "./Label.module.css";

const Label = ({ className, children }) => {
  return (
    <label className={`${className ? className : styles.default}`}>
      {children}
    </label>
  );
};

export default Label;
