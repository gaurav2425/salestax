import React, { useState } from "react";
import styles from "../styles/ForgotPassword.module.css";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const SendEmail = async () => {
    fetch("http://192.168.15.15:5000/api/forgotpassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.field_box}>
        <h1 className={styles.forgot_txt_heading}>Forgot Password</h1>
        <input
          placeholder="Enter your Email"
          type="email"
          className={styles.email_input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div className={styles.forgot_btn}>
          <h1 className={styles.forgot_btn_txt}>Reset</h1>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
