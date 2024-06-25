import React, { useEffect, useState } from "react";
import styles from "./Works.module.css";
import Button from "../../components/common/button/Button";
import WorkCard from "../../components/common/workCard/WorkCard";
import { worksList } from "../../assets/constant/worksConstant";
import Toast from "../../components/common/toast";
import { useNavigate } from "react-router-dom";
import WorkCardLoading from "../../components/common/skeleton/workCardLoading";
import useLoading from "../../hooks/useLoading";

const Works = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const isLoading = useLoading(3000);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div className={styles.works_page}>
      <div className={styles.works_container}>
        <div className={styles.works_title}>
          <h1>Last works</h1>
          <div className={styles.works_btn_container}>
            {!showAll && worksList.length > 2 && (
              <Button className={styles.works_btn} onClick={handleShowMore}>
                View all Works
              </Button>
            )}
            <Toast style={{ width: "50%" }} />
          </div>
        </div>
        <div className={styles.works_cards_container}>
          {isLoading ? (
            <WorkCardLoading cards={2} />
          ) : (
            worksList &&
            worksList
              .slice(0, showAll ? worksList.length : 2)
              .map((work, index) => {
                return (
                  <WorkCard key={index} work={work} isLoading={isLoading} />
                );
              })
          )}
        </div>

        <Button className={styles.works_btn} onClick={handleHomePage}>
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default Works;
