import React from "react";
import styles from "../styles/Navbar.module.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_container_left}>
        <h1>Sales Tax</h1>
      </div>
      <div className={styles.input_container}>
        <input placeholder="Search Something"></input>
      </div>

      <div className={styles.container_right}>
        <NotificationsNoneOutlinedIcon
          size={55}
          style={{ width: 30, height: 30, color: "#FFFFFF" }}
          className={styles.notification_icon}
        ></NotificationsNoneOutlinedIcon>
        <div className={styles.profile_container}>
          <img
            src="
https://robohash.org/tax"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
