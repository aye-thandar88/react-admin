import React, { useState, useRef } from "react";
import styles from "./Contact.module.css";
import ContactForm from "../../components/form/contactForm/ContactForm";
import {
  contactInfoLists,
  contactContentData,
} from "../../assets/constant/cardConstant";
import ContentCard from "../../components/common/contentCard/ContentCard";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../context/ToastContext";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const form = useRef();
  const navigate = useNavigate();
  const { showToast } = useToast();

  let contactInfo = {
    form,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gdsg1hb", "template_lzzm5hm", form.current, {
        publicKey: "nJwTva7DwydKJWI8Q",
      })
      .then(
        () => {
          const message = {
            status: "success",
            text: "Message has been sent successfully!",
          };
          showToast(message);
          navigate("/");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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
            <ContactForm
              contactInfo={contactInfo}
              onClick={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
