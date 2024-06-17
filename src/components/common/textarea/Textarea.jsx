import React from "react";
import styles from "./Textarea.module.css";

const Textarea = ({
  id,
  value,
  rows = 5,
  placeholder,
  className,
  children,
}) => {
  return (
    <textarea
      id={id}
      value={name}
      rows={rows}
      placeholder={placeholder}
      className={`${className ? className : styles.default}`}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
