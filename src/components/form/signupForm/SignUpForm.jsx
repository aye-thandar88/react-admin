import React from "react";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from "./SignUpForm.module.css";
import Label from "../../common/label/Label";

const SignUpForm = ({ loginInfo, onClickSignup }) => {
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
      <Button className={styles.signup_btn} onClick={onClickSignup}>
        Create an Account
      </Button>
      <div className={styles.haveAcc_container}>
        <Label className={styles.haveAcc_label}>Already have an account?</Label>
        <Label className={styles.login_label}>
          <a href="/login">Login</a>
        </Label>
      </div>
      <div className={styles.divider}>or</div>
      <Button className={styles.signup_btn_twt}>Login via Twitter</Button>
    </form>
  );
};

export default SignUpForm;
