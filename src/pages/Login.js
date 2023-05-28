import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const cookies = new Cookies();

  const navigate = useNavigate();

  const ValidLogin = () => {
    navigate("/dashboard");
  };

  const Login = async () => {
    fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.valid);
        if (data.valid === "true") {
          alert("valid");
          cookies.set("token", data, { path: "/" });
          // console.log(cookies.get('myCat'));
          ValidLogin();
        }
        if (data.valid == "false") {
          alert("Invalid");
        }
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
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

        <Link
          // to="/dashboard"
          style={{ textDecoration: "none" }}
          onClick={Login}
        >
          <div className={styles.login_btn}>
            <h1 className={styles.login_btn_txt}>Login</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
