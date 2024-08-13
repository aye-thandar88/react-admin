import React from "react";
import styles from "./style.module.css";
import Lottie from "react-lottie";
import animationData from "../../../assets/json/lottie-json.json";

export const animationDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
};

const EmptyChatContainer = ({ description }) => {
  return (
    <div className={styles.empty_chat_container}>
      <Lottie
        isClickToPauseDisabled={true}
        height={200}
        width={200}
        options={animationDefaultOptions}
      />
      <div className={styles.welcome_text}>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
