import React, { useState } from "react";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from "./LoginForm.module.css";

const LoginForm = ({ loginInfo, onClick, onClickHomeBtn, loginError }) => {
  const { email, password, setEmail, setPassword } = { ...loginInfo };
  const { emailError, passwordError, setEmailError, setPasswordError } = {
    ...loginError,
  };

  return (
    <form className={styles.inputs_container} onSubmit={onClick}>
      <div className={styles.signup_input_container}>
        {emailError && <span>{emailError}</span>}
        <Input
          id={"email"}
          type={"email"}
          value={email}
          placeholder={"Your email"}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          className={styles.signup_input}
        />
      </div>

      <div className={styles.signup_input_container}>
        {passwordError && <span>{passwordError}</span>}
        <Input
          id={"password"}
          type={"password"}
          value={password}
          placeholder={"Your password"}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
          className={styles.signup_input}
        />
      </div>

      <Button className={styles.signup_btn}>Login</Button>
      <div className={styles.divider}>or</div>
      <Button className={styles.home_btn} onClick={onClickHomeBtn}>
        Go back Home
      </Button>
    </form>
  );
};

export default LoginForm;
