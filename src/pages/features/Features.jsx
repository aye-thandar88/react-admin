import React from "react";
import styles from "./Features.module.css";
import { featureContentData } from "../../assets/constant/cardConstant";
import ContentCard from "../../components/common/contentCard/ContentCard";

const Features = () => {
  return (
    <div className={styles.featuresHome}>
      <div className={styles.feature_container}>
        <div>
          <img
            src="../src/assets/svg/leaf.svg"
            alt="feature1"
            className={styles.leaf_img}
            loading="lazy"
          />
        </div>
        <div className={styles.content_container}>
          <ContentCard
            contentData={featureContentData}
            className={styles.content}
          />
          <div className={styles.features_list}>
            <div className={styles.feature}>
              <img
                src="../src/assets/svg/rectangle.svg"
                alt="feature1"
                className={styles.img}
                loading="lazy"
              />
              <span style={{ fontWeight: "bold" }}>30 New feature pages</span>
              <span className={styles.featurebody_font}>
                Startup Framework contains components and complex blocks which
                can easily.
              </span>
            </div>
            <div className={styles.feature}>
              <img
                src="../src/assets/svg/diamond.svg"
                alt="feature1"
                className={styles.img}
                loading="lazy"
              />
              <span style={{ fontWeight: "bold" }}>
                Useful Symbol Components
              </span>
              <span className={styles.featurebody_font}>
                Samples will show you the feeling on how to play around using
                the components.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
