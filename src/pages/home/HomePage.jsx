import React from "react";
import CardSlider from "../../components/common/cardSlider/CardSlider";
import Card from "../../components/common/card/Card";
import Button from "../../components/common/button/Button";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { cardsData } from "../../assets/constant/cardConstant";
import HomeLayout from "../../components/layout/homeLayout/HomeLayout";
import Brand from "../brand/brand";
import Features from "../features/Features";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomeLayout className={styles.home}>
      <CardSlider>
        {cardsData.map((cardData, index) => (
          <Card key={index} cardData={cardData} />
        ))}
      </CardSlider>
      <div className={styles.btn_container}>
        <Button
          className={styles.home_button}
          onClick={() => navigate(`/login`)}
        >
          Create an Account
        </Button>
      </div>
      <Features/>
      <Brand/>
    </HomeLayout>
  );
};

export default HomePage;
