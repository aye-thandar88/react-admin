import React from "react";
import styles from "./Brand.module.css";
import { clientsList } from "../../assets/constant/clientsConstant";
import HomeLayout from "../../components/layout/homeLayout/HomeLayout";

const Brand = () => {
  return (
    <HomeLayout className={styles.brand_page}>
      <div className={styles.clients_container}>
        <h1>Our Happy Clients</h1>
        <div className={styles.clients_card_container}>
          {clientsList?.map((client, index) => {
            return (
              <div className={styles.client_card} key={index}>
                <img
                  src={client.imgSrc}
                  alt={client.alt}
                  className={styles.img}
                  loading="lazy"
                />
                <div className={styles.client_content}>
                  <span className={styles.text_desc}>{client.description}</span>
                  <span className={styles.text_name}>
                    {client.name?.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Brand;
