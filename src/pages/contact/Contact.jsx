import React, { useState } from "react";
import styles from "./Contact.module.css";
import ContactForm from "../../components/form/contactForm/ContactForm";
import {
  contactInfoLists,
  contactContentData,
} from "../../assets/constant/cardConstant";
import ContentCard from "../../components/common/contentCard/ContentCard";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  let contactInfo = {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
  };

  return (
    <div className={styles.contact_page}>
      <div className={styles.contact_page_container}>
        <div className={styles.contact_content}>
          <ContentCard
            contentData={contactContentData}
            className={styles.contact_des}
          />

          <div className={styles.contact_info_container}>
            {contactInfoLists?.map((info, index) => {
              return (
                <div className={styles.contact_info} key={index}>
                  <img
                    src={info.src}
                    alt={info.name}
                    loading="lazy"
                    className={styles.contact_icon}
                  />
                  <span>{info.description}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.contact_content}>
          <div className={styles.form}>
            <ContactForm contactInfo={contactInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
