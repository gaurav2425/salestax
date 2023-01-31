import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import styles from "../styles/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_menus}>
        {/* <ul className={styles.sidebar_ul}> */}
        <div className={styles.section}>
          <HomeOutlinedIcon
            style={{ width: 25, height: 25 }}
            className={styles.home_icon}
          ></HomeOutlinedIcon>
          <li>Home</li>
        </div>

        <div className={styles.section}>
          <UpdateOutlinedIcon
            size={25}
            style={{ width: 25, height: 25 }}
            className={styles.recent_icon}
          ></UpdateOutlinedIcon>
          <li>Recent</li>
        </div>
        {/* </ul> */}
      </div>

      <div className={styles.logout_menu}>
        <div className={styles.section}>
          <LogoutOutlinedIcon
            size={25}
            style={{ width: 25, height: 25 }}
            className={styles.recent_icon}
          ></LogoutOutlinedIcon>
          <li>Logout</li>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
