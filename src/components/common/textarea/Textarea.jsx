import React from "react";
import styles from "./Textarea.module.css";

const Textarea = ({
  id,
  value,
  rows = 5,
  placeholder,
  className,
  children,
  onChange,
}) => {
  return (
    <textarea
      id={id}
      value={value}
      rows={rows}
      placeholder={placeholder}
      className={`${className ? className : styles.default}`}
      onChange={onChange}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
