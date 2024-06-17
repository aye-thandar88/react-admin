import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, id, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className ? className : styles.default}`}
    />
  );
};

export default Input;
