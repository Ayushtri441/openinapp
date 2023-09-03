import React from "react";
import styles from "../css/login.module.css";
import SignUpBox from "../components/SignupBox";
import Icondiscord from "../icons/icondiscord";
import Iconlinkdin from "../icons/iconlinkdin";
import Icontwitter from "../icons/Icontwitter";
import Icongithub from "../icons/icongithub";

const SignUp = () => {
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
            <span className={styles.signInSpan}>Sign Up</span>
            <div className={styles.form}>
              <SignUpBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
