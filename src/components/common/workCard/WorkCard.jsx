import React from "react";
import styles from "./WorkCard.module.css";

const WorkCard = ({ work }) => {
  const { imgSrc, type, name } = { ...work };
  return (
    <div className={styles.work_card}>
      <img src={imgSrc} alt={type} className={styles.img} loading="lazy" />
      <div className={styles.work_description}>
        <span className={styles.type}>{type.toUpperCase()}</span>
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  );
};

export default WorkCard;
