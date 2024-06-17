import React from "react";
import styles from "./ContentCard.module.css";

const ContentCard = ({ contentData, className }) => {
  const { title, content } = { ...contentData };
  return (
    <div className={className}>
      <h1>{title}</h1>
      <span>{content}</span>
    </div>
  );
};

export default ContentCard;
