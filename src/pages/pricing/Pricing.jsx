import React from "react";
import styles from "./Pricing.module.css";
import PriceCard from "../../components/common/priceCard/PriceCard";
import { plans } from "../../assets/constant/priceConstant";
import ContentCard from "../../components/common/contentCard/ContentCard";
import { priceContentData } from "../../assets/constant/cardConstant";

const Pricing = () => {
  return (
    <div className={styles.pricing_page}>
      <div className={styles.pricing_container}>
        <ContentCard
          contentData={priceContentData}
          className={styles.pricing_title}
        />
        <div className={styles.price_card_container}>
          {plans.map((plan, index) => {
            return plan && <PriceCard index={index} plan={plan} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
