import React, { useEffect } from "react";
import styles from "../css/login.module.css";
import { Link } from "react-router-dom";
import LoginBox from "../components/LoginBox";
import Icondiscord from "../icons/icondiscord";
import Iconlinkdin from "../icons/iconlinkdin";
import Icontwitter from "../icons/Icontwitter";
import AccountLogin from "../components/GoogleAppleBtn";
import Icongithub from "../icons/icongithub";
import { gapi } from "gapi-script";

const clientId = "xyz";

const Login = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.board}>
          <span className={styles.logo}>Logo</span>
          <span className={styles.boardtext}>Board.</span>
          <div className={styles.iconcontainer}>
          <Icongithub/><Icontwitter/>  <Iconlinkdin/><Icondiscord/>
          </div>
        </div>
        <div className={`d-flex justify-content-center ${styles.div2}`}>
          <div className={styles.login}>
            <span className={styles.signInSpan}>Sign In</span>
            <span className={styles.signInSpansmall}>
              Sign in to your account  
            </span>
            <div className={styles.google}>
              <AccountLogin />
            </div>
            <div className={styles.form}>
              <LoginBox />
            </div>
            <span className={styles.register}>
              Don't have an account?
              <Link to='/signUp' className={styles.link}>Register here</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
