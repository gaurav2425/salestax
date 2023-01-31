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
          style={{ width: 30, height: 30 }}
          className={styles.notification_icon}
        ></NotificationsNoneOutlinedIcon>
        <div className={styles.profile_container}>
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
