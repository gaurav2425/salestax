import { useState } from "react";
import Papa from "papaparse";
import styles from "../../src/styles/Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import Dashbar from "../components/Dashbar";
import Navbar from "../components/Navbar";
function Dashboard() {
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);
        // Filtered Column Names
        setTableRows(rowsArray[0]);
        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  return (
    // <div>
    //   <input
    //     type="file"
    //     name="file"
    //     onChange={changeHandler}
    //     accept=".csv"
    //     style={{ display: "block", margin: "10px auto" }}
    //   />
    //   <br />
    //   <br />

    //   <table>
    //     <thead>
    //       <tr>
    //         {tableRows.map((rows, index) => {
    //           return <th key={index}>{rows}</th>;
    //         })}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {values.map((value, index) => {
    //         return (
    //           <tr key={index}>
    //             {value.map((val, i) => {
    //               return <td key={i}>{val}</td>;
    //             })}
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
    <div className={styles.dashboard_main}>
      <div className={styles.dashboard_navbar}>
        <Navbar></Navbar>
      </div>
      <div className={styles.dashboard_section2}>
        <div className={styles.dashboard_sidebar}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.dashboard_dashbar}>
          <Dashbar></Dashbar>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
