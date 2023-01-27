import React from "react";
import styles from "../styles/Login.module.css";
function Login() {
  return (
    <div className={styles.main_container}>
      <div className={styles.field_box}>
        <h1 className={styles.login_txt_heading}>
          Login into Existing Account
        </h1>
        <input
          placeholder="Enter your Email"
          type="email"
          className={styles.email_input}
        ></input>
        <input
          placeholder="Enter your Password"
          type="password"
          className={styles.password_input}
        ></input>
        <h1 className={styles.forget_password_txt}>Forgot Password?</h1>
        <div className={styles.login_btn}>
          <h1 className={styles.login_btn_txt}>Login</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;