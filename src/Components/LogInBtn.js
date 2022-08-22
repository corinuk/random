import React from "react";
import styles from "./LogInBtn.module.css";

function LoginBtn({ onClick }) {
  return (
    <div className={styles.login_btn_div}>
      <button className={styles.login_btn} onClick={onClick}>
        Kakao Log In
      </button>
    </div>
  );
}

export default LoginBtn;
