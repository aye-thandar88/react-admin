import React from "react";
import Button from "../button/Button";
import List from "../list/List";
import styles from "./PriceCard.module.css";

const PriceCard = ({ plan }) => {
  const { name, price, offers } = { ...plan };

  return (
    <div className={styles.pricecard}>
      <div>
        <span>{name}</span>
        <div className={styles.price_display}>
          <h1>{price}</h1>
          <span>$</span>
        </div>
      </div>

      <div>
        <List offers={offers} />
      </div>

      <Button className={styles.price_btn}>Get Started</Button>
    </div>
  );
};

export default PriceCard;
