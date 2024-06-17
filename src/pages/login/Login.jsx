import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../components/common/button/Button";
import LoginForm from "../../components/form/loginForm/LoginForm";
import SignUpForm from "../../components/form/signupForm/SignUpForm";
import ContentCard from "../../components/common/contentCard/ContentCard";
import { loginContentData } from "../../assets/constant/cardConstant";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [title, setTitle] = useState("signup");

  let loginInfo = {
    email: email,
    password: password,
    setEmail: setEmail,
    setPassword: setPassword,
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.login_page_container}>
        <ContentCard
          contentData={loginContentData}
          className={styles.login_content}
        />
        <div className={styles.form_container}>
          <div className={styles.form}>
            <div className={styles.btns_container}>
              <Button
                className={
                  title === "signup" ? styles.signup_active : styles.signup
                }
                onClick={() => {
                  setTitle("signup");
                }}
              >
                SIGN UP
              </Button>
              <Button
                className={
                  title === "login" ? styles.signup_active : styles.signup
                }
                onClick={() => {
                  setTitle("login");
                }}
              >
                LOGIN
              </Button>
            </div>
            {title === "signup" ? (
              <SignUpForm loginInfo={loginInfo} />
            ) : (
              <LoginForm loginInfo={loginInfo} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
