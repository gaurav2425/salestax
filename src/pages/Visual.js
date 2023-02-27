import React, { useState } from "react";
import BarChart from "../Chart/BarChart";
import LineChart from "../Chart/LineChart";
import BubbleChart from "../Chart/BubbleChart";
import { Doughnut } from "react-chartjs-2";

import PieChart from "../Chart/PieChart";
import { UserData } from "../Data";
import styles from "../styles/Visual.module.css";
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
    <div>
      <div className={styles.box_third}>
        <div className={styles.box_third1}>
          <BarChart chartData={userData} />
        </div>
        <div className={styles.box_third1}>
          <LineChart chartData={userData}></LineChart>
        </div>

        <div className={styles.box_third1}>
          <PieChart chartData={userData}></PieChart>
        </div>

        {/* <div className={styles.box_third1}>
          <BubbleChart chartData={userData}></BubbleChart>
        </div> */}
      </div>
    </div>
  );
}

export default Visual;
