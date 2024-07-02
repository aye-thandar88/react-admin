import React from "react";
import styles from "./Pricing.module.css";
import PriceCard from "../../components/common/priceCard/PriceCard";
import { plans } from "../../assets/constant/priceConstant";
import ContentCard from "../../components/common/contentCard/ContentCard";
import { priceContentData } from "../../assets/constant/cardConstant";
import HomeLayout from "../../components/layout/homeLayout/HomeLayout";
import { getApi } from "../../api";

const Pricing = () => {
  const handleClick = async () => {
    try {
      const response = await getApi("/users");
      console.log("res", response);
    } catch (err) {
      console.log("err com", err);
    }
  };

  return (
    <HomeLayout className={styles.pricing_page}>
      <div className={styles.pricing_container}>
        <ContentCard
          contentData={priceContentData}
          className={styles.pricing_title}
        />
        <div className={styles.price_card_container}>
          {plans.map((plan, index) => {
            return (
              plan && (
                <PriceCard key={index} plan={plan} onClick={handleClick} />
              )
            );
          })}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Pricing;
