import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../components/common/button/Button";
import LoginForm from "../../components/form/loginForm/LoginForm";
import SignUpForm from "../../components/form/signupForm/SignUpForm";
import ContentCard from "../../components/common/contentCard/ContentCard";
import { loginContentData } from "../../assets/constant/cardConstant";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../api";
import useToast from "../../hooks/useToast";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [title, setTitle] = useState("login");
  const { login } = useAuth();

  const navigate = useNavigate();
  const { showToast } = useToast();

  let loginInfo = {
    email: email,
    password: password,
    setEmail: setEmail,
    setPassword: setPassword,
  };
  const body = { email: loginInfo.email, password: loginInfo.password };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(body);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      if (err.response.status === 404) {
        setTitle("signup");
        showToast({ status: "error", text: err.response.data.message });
      }
    }

    setClear();
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await postApi(`/users/register`, body);
      if (response.status === 201) {
        const message = { status: "success", text: response.data.message };
        showToast(message);
      }
    } catch (err) {}
    setClear();
  };

  const setClear = () => {
    setEmail("");
    setPassword("");
  };

  const handleGoHome = () => {
    navigate("/")
  }

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
              <>
                <LoginForm
                  loginInfo={loginInfo}
                  onClick={handleLogin}
                  onClickHomeBtn={handleGoHome}
                />
              </>
            ) : (
              <>
                <SignUpForm
                  loginInfo={loginInfo}
                  onClickSignup={handleSignup}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
