import React from "react";
import styles from "./Card.module.css";

const Card = ({ cardData,className }) => {
  const { span, title, content } = cardData;
  return (
    <div className={`${className ? className : styles.card_container}`}>
      <div className={styles.inner_card_container}>
        <span className={styles.span}>{span}</span>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.content}>{content}</span>
      </div>
    </div>
  );
};

export default Card;
