import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import styles from "../styles/Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar_container}>
      <div>Sidebar</div>
      <div>
        <ul>
          <div className={styles.section}>
            <HomeOutlinedIcon
              size={25}
              className={styles.home_icon}
            ></HomeOutlinedIcon>
            <li>Home</li>
          </div>

          <div className={styles.section}>
            <UpdateOutlinedIcon
              size={25}
              className={styles.recent_icon}
            ></UpdateOutlinedIcon>
            <li>Recent</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
