import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./CardSlider.module.css";

const CardSlider = ({ children }) => {
  return (
    <div className={styles.carousel_container}>
      <Carousel autoPlay showStatus={false} interval={5000} showArrows={true}>
        {children}
      </Carousel>
    </div>
  );
};

export default CardSlider;
