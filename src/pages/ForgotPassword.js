import React from "react";
import styles from "../styles/ForgotPassword.module.css";
function ForgotPassword() {
  return (
    <div className={styles.main_container}>
      <div className={styles.field_box}>
        <h1 className={styles.forgot_txt_heading}>Forgot Password</h1>
        <input
          placeholder="Enter your Email"
          type="email"
          className={styles.email_input}
        ></input>
        <div className={styles.forgot_btn}>
          <h1 className={styles.forgot_btn_txt}>Reset</h1>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
