import React from "react";
import styles from "./WorkCard.module.css";

const WorkCard = ({ work }) => {
  const { imgSrc, type, name } = { ...work };
  return (
    <div className={styles.work_card}>
      <img src={imgSrc} alt={type} className={""} loading="lazy" />
      <div className={styles.work_description}>
        <span style={{ fontSize: "14px" }}>{type.toUpperCase()}</span>
        <span style={{ fontSize: "18px" }}>{name}</span>
      </div>
    </div>
  );
};

export default WorkCard;
