import React from "react";
import styles from "./Works.module.css";
import Button from "../../components/common/button/Button";
import WorkCard from "../../components/common/workCard/WorkCard";
import { worksList } from "../../assets/constant/worksConstant";

const Works = () => {
  return (
    <div className={styles.works_page}>
      <div className={styles.works_container}>
        <div className={styles.works_title}>
          <h1>Last works</h1>
          <div className={styles.works_btn_container}>
            <Button className={styles.works_btn}>View all Works</Button>
          </div>
        </div>
        <div className={styles.works_cards_container}>
          {worksList &&
            worksList.map((work, index) => {
              return <WorkCard key={index} work={work} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Works;
