import Lottie from "lottie-react";
import styles from "./Loading.module.css";
import loadingAnimation from "../../../assets/json/loadingAnimation.json";

const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <Lottie animationData={loadingAnimation} loop={true} className={styles.loading}/>
    </div>
  );
};

export default Loading;
