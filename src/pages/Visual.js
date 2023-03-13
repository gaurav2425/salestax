import { useState } from "react";
import Papa from "papaparse";
// import styles from "../../src/styles/Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import styles from "../../src/styles/Visual.module.css";
import Dashbar from "../components/Dashbar";
import BarChart from "../Chart/BarChart";
import LineChart from "../Chart/LineChart";
import BubbleChart from "../Chart/BubbleChart";
import PieChart from "../Chart/PieChart";
import Navbar from "../components/Navbar";
import { UserData } from "../Data";

function Visual() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className={styles.dashboard_main}>
      <div className={styles.dashboard_navbar}>
        <Navbar></Navbar>
      </div>
      <div className={styles.dashboard_section2}>
        <div className={styles.dashboard_sidebar}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.dashboard_dashbar}>
          <div className={styles.box_third}>
            <div className={styles.box_third1}>
              <BarChart chartData={userData} />
            </div>
            <div className={styles.box_third1}>
              <LineChart chartData={userData}></LineChart>
            </div>
          </div>
        </div>

        <div className={styles.dashboard_dashbar}>
          <div className={styles.box_third}>
            <div className={styles.box_third1}>
              <BubbleChart chartData={userData} />
            </div>
            <div className={styles.box_third1}>
              <PieChart chartData={userData}></PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visual;
