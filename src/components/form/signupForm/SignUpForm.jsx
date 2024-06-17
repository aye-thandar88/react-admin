import React from "react";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from "./SignUpForm.module.css";

const SignUpForm = ({ loginInfo }) => {
  const { email, password, setEmail, setPassword } = { ...loginInfo };

  return (
    <form className={styles.inputs_container}>
      <Input
        id={"email"}
        type={"email"}
        value={email}
        placeholder={"Your email"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className={styles.signup_input}
      />
      <Input
        id={"password"}
        type={"password"}
        value={password}
        placeholder={"Your password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className={styles.signup_input}
      />
      <Button className={styles.signup_btn} onClick={() => {}}>
        Create an Account
      </Button>
      <div className={styles.divider}>or</div>
      <Button className={styles.signup_btn_twt}>Login via Twitter</Button>
    </form>
  );
};

export default SignUpForm;
