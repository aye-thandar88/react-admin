import React from "react";
import styles from "./Pricing.module.css";
import PriceCard from "../../components/common/priceCard/PriceCard";
import { plans } from "../../assets/constant/priceConstant";
import ContentCard from "../../components/common/contentCard/ContentCard";
import { priceContentData } from "../../assets/constant/cardConstant";
import HomeLayout from "../../components/layout/homeLayout/HomeLayout";
import { getApi, refreshAccessToken } from "../../api";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [token, setToken, removeToken] = useLocalStorage("token", null);
  const [refreshToken, setRefreshToken, removeRefreshToken] = useLocalStorage(
    "refreshToken",
    null
  );
  const [isAuthenticated, setAuth] = useLocalStorage("isAuthenticated", false);
  const navigate = useNavigate();

  const handleClick = async () => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    try {
      const response = await getApi("/users", headers);
      console.log("res", response);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        try {
          const newToken = await refreshAccessToken(
            "/users/refresh-token",
            refreshToken
          );

          const newHeaders = newToken?.data?.accessToken
            ? { Authorization: `Bearer ${newToken?.data?.accessToken}` }
            : {};

          if (newHeaders) {
            const response = await getApi("/users", newHeaders);
            console.log("response", response);
          }
        } catch (err) {
          if (err.response) {
            setAuth(false);
            navigate("/login");
          }
        }
      }
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
                <PriceCard index={index} plan={plan} onClick={handleClick} />
              )
            );
          })}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Pricing;
