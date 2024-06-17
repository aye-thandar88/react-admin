import React from "react";
import Label from "../label/Label";
import styles from "./Checkbox.module.css";

const Checkbox = ({ id, value, label, className }) => {
  return (
    <div className={`${className ? className : styles.cbox_container}`}>
      <input type="checkbox" id={id} value={value} />
      <Label for={id} className={styles.label}>
        {label}
      </Label>
    </div>
  );
};

export default Checkbox;
