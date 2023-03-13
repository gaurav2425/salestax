import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "../styles/Login.module.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    fetch("http://192.168.15.15:5000/api/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
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
        <h1 className={styles.login_txt_heading}>
          Login into Existing Account
        </h1>
        <input
          placeholder="Enter your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.email_input}
        ></input>
        <input
          placeholder="Enter your Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.password_input}
        ></input>
        <Link to="/forgotpassword">
          <h1 className={styles.forget_password_txt}>Forgot Password?</h1>
        </Link>

        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <div className={styles.login_btn}>
            <h1 className={styles.login_btn_txt}>Login</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
