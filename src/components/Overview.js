import React, { useState } from "react";
import styles from "../styles/Overview.module.css";
import { UserData } from "../Data";
import BarChart from "../Chart/BarChart";
import LineChart from "../Chart/LineChart";
function Overview() {
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
    <div className={styles.overview_container}>
      <div className={styles.box_third_heading}>
        <h1>Numeric Values</h1>
      </div>
      <div className={styles.box_first}>
        <div className={styles.box_first1}>
          <h1>Predicted Sales for</h1>
          <p>prediction for Aug 2021</p>
          <h2>+$1,12,258</h2>
        </div>
        <div className={styles.box_first1}>
          <h1>Percentage Change</h1>
          <p>prediction for Aug 2021</p>
          <h2>+10%</h2>
        </div>

        <div className={styles.box_first1}>
          <h1>Previous Prediction</h1>
          <p>prediction for Aug 2021</p>
          <h2>+$1,05,658</h2>
        </div>
      </div>

      <div className={styles.box_second}>
        <div className={styles.box_second1}>
          <h1>Predicted Sales for</h1>
          <p>prediction for Aug 2021</p>
          <h2>$1,12,258</h2>
          <h3>$1,00,00</h3>
        </div>
        <div className={styles.box_second1}>
          <h1>Total Sales</h1>
          <p>prediction for Aug 2021</p>
          <h2>$1,12,258</h2>
          <h3>$1,00,00</h3>
        </div>
        <div className={styles.box_second1}>
          <h1>United Sales</h1>
          <p>prediction for Aug 2021</p>
          <h2>$1,12,258</h2>
          <h3>$1,00,00</h3>
        </div>

        <div className={styles.box_second1}>
          <h1>Organic Sales</h1>
          <p>prediction for Aug 2021</p>
          <h2>$1,12,258</h2>
          <h3>$1,00,00</h3>
        </div>
      </div>
      <div className={styles.box_third_heading}>
        <h1>Visual Representation</h1>
      </div>
      <div className={styles.box_third}>
        <div className={styles.box_third1}>
          <BarChart chartData={userData} />
        </div>
        <div className={styles.box_third1}>
          <LineChart chartData={userData}></LineChart>
        </div>
      </div>
    </div>
  );
}

export default Overview;
