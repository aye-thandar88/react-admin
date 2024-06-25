import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Skeleton.module.css";

const WorkCardLoading = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className={styles.work_card}>
        <Skeleton height={300} width={450} />

        <div className={styles.work_description}>
          <Skeleton width={100} height={14} style={{ marginBottom: "6px" }} />
          <Skeleton width={150} height={18} />
        </div>
      </div>
    ));
};

export default WorkCardLoading;
