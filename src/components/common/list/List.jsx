import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import { offerLists } from "../../../assets/constant/priceConstant";

const List = ({ offers }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const olist = offerLists.map((offer) => ({
      ...offer,
      checked: offers.includes(offer.no),
    }));
    setList(olist);
  }, [offers]);

  return (
    <div className={styles.lst_container}>
      {list.map((offer, index) => {
        return (
          <div className={styles.checkdbox_container} key={index}>
            <input
              type="checkbox"
              value={offer.no}
              id={`checkbox-${offer.no}`}
              checked={offer.checked}
              className={styles.checkdbox}
            />
            <label
              htmlFor={`checkbox-${offer.no}`}
              className={!offer.checked && styles.label_unchecked}
            >
              {offer.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default List;
