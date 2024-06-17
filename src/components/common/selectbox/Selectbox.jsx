import React from "react";
import styles from "./Selectbox.module.css";

const budgets = [
  { value: "500", label: "$500" },
  { value: "500", label: "$1000" },
  { value: "500", label: "$1500" },
];
const Selectbox = ({ className }) => {
  return (
    <select id="budget" className={`${className ? className : styles.default}`}>
      {budgets?.map((budget, index) => (
        <option key={index} value={budget.value}>
          {budget.label}
        </option>
      ))}
    </select>
  );
};

export default Selectbox;
