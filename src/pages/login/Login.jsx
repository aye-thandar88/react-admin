import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../components/common/button/Button";
import LoginForm from "../../components/form/loginForm/LoginForm";
import SignUpForm from "../../components/form/signupForm/SignUpForm";
import ContentCard from "../../components/common/contentCard/ContentCard";
import { loginContentData } from "../../assets/constant/cardConstant";
import getApi from "../../api/getApi";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [title, setTitle] = useState("login");
  const [token, setToken, removeToken] = useLocalStorage("token", null);
  const [isAuthenticated, setAuth] = useLocalStorage("isAuthenticated", false);
  const navigate = useNavigate();

  let loginInfo = {
    email: email,
    password: password,
    setEmail: setEmail,
    setPassword: setPassword,
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3002/api/v1/users/login`, {
        email: loginInfo.email,
        password: loginInfo.password,
      })
      .then((res) => {
        if (res.status === 200) {
          setToken(res.data.token);
          setAuth(true);

          navigate("/");
        }

        setEmail("");
        setPassword("");
      });
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
            {title === "login" ? (
              <LoginForm loginInfo={loginInfo} onClick={handleLogin} />
            ) : (
              <SignUpForm loginInfo={loginInfo} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
