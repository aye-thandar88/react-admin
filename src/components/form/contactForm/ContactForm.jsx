import React from "react";
import styles from "./ContactForm.module.css";
import Input from "../../common/input/Input";
import Textarea from "../../common/textarea/Textarea";
import Button from "../../common/button/Button";
import Label from "../../common/label/Label";
import Checkbox from "../../common/checkbox/Checkbox";
import Selectbox from "../../common/selectbox";

const ContactForm = ({ contactInfo, onClick }) => {
  const { form, name, setName, email, setEmail, message, setMessage } = {
    ...contactInfo,
  };

  return (
    <form className={styles.inputs_container} onSubmit={onClick} ref={form}>
      <div className={styles.first_con}>
        <div className={styles.input_con_label}>
          <Label>YOUR NAME</Label>
          <Input
            id={"name"}
            type={"text"}
            value={name}
            placeholder={"First name"}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={styles.contact_input}
          />
        </div>
        <div className={styles.input_con_label}>
          <Label>BUDGET</Label>
          <Selectbox className={styles.budget_select} />
        </div>
      </div>
      <div className={styles.first_con}>
        <div className={styles.full_input_con_label}>
          <Label>YOUR EMAIL</Label>
          <Input
            id={"email"}
            type={"email"}
            value={email}
            placeholder={"name@mail.com"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={styles.contact_input}
          />
        </div>
      </div>
      <div className={styles.first_con}>
        <div className={styles.full_input_con_label}>
          <Label>YOUR MESSAGE</Label>
          <Textarea
            className={styles.msg_textara}
            placeholder={"Message"}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.first_con}>
        <Checkbox id="copy" label={"Send me a copy"} />
        <Button className={styles.send_btn}>Send</Button>
      </div>
    </form>
  );
};

export default ContactForm;
