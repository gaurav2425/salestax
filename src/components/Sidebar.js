import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import styles from "../styles/Sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_menus}>
        {/* <ul className={styles.sidebar_ul}> */}
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <div className={styles.section}>
            <HomeOutlinedIcon
              style={{ width: 25, height: 25 }}
              className={styles.home_icon}
            ></HomeOutlinedIcon>
            <li>Home</li>
          </div>
        </Link>

        <Link to="/visual" style={{ textDecoration: "none" }}>
          <div className={styles.section}>
            <GraphicEqIcon
              size={25}
              style={{ width: 25, height: 25 }}
              className={styles.recent_icon}
            ></GraphicEqIcon>
            <li>Visual</li>
          </div>
        </Link>

        {/* </ul> */}
      </div>

      <div className={styles.logout_menu}>
        <Link to="/">
          <div className={styles.section}>
            <LogoutOutlinedIcon
              size={25}
              style={{ width: 25, height: 25 }}
              className={styles.recent_icon}
            ></LogoutOutlinedIcon>
            <li>Logout</li>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
