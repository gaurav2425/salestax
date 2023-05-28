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
// import { UserData } from "../Data";
import { FileDataAction } from "../actions/FileData";
import { useSelector, useDispatch } from "react-redux";

function Visual() {
  const MyFileData = useSelector((state) => state.FileDataReducer);
  console.log("data From Visual");
  console.log(MyFileData.filedata);
  // setParsedData()
  console.log("data From Visual");

  const [Data, setData] = useState({
    labels: MyFileData.filedata.slice(0, 30).map((data) => data.index),
    datasets: [
      {
        label: "p_stnet",
        data: MyFileData.filedata.slice(0, 30).map((data) => data.p_stnet),
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
        <div style={{ marginLeft: 220 }}>
          <div className={styles.dashboard_dashbar}>
            <div className={styles.box_third}>
              <div className={styles.box_third1}>
                <BarChart chartData={Data} />
              </div>
              <div className={styles.box_third1}>
                <LineChart chartData={Data}></LineChart>
              </div>
            </div>
          </div>

          <div className={styles.dashboard_dashbar}>
            <div className={styles.box_third}>
              <div className={styles.box_third1}>
                <BubbleChart chartData={Data} />
              </div>
              <div className={styles.box_third1}>
                <PieChart chartData={Data}></PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visual;
