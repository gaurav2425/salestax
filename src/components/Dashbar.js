import React, { useState } from "react";
import styles from "../styles/Dashbar.module.css";
import Upload from "./Upload";
import Overview from "./Overview";
function Dashbar() {
  const [selected, setSelected] = useState(1);
  return (
    <div className={styles.dashbar_main_container}>
      <div className={styles.button_container}>
        {selected == 1 ? (
          <div
            className={styles.overview_button_hovered}
            onClick={() => {
              setSelected(1);
            }}
          >
            <h1>Overview</h1>
          </div>
        ) : (
          <div
            className={styles.overview_button}
            onClick={() => {
              setSelected(1);
            }}
          >
            <h1>Overview</h1>
          </div>
        )}
        {selected == 0 ? (
          <div
            className={styles.upload_button_hovered}
            onClick={() => {
              setSelected(0);
            }}
          >
            <h1>Upload File</h1>
          </div>
        ) : (
          <div
            className={styles.upload_button}
            onClick={() => {
              setSelected(0);
            }}
          >
            <h1>Upload File</h1>
          </div>
        )}
      </div>

      {selected == 1 ? (
        <div className={styles.overview_container}>
          <Overview></Overview>
        </div>
      ) : (
        <div className={styles.upload_container}>
          <Upload></Upload>
        </div>
      )}
    </div>
  );
}

export default Dashbar;
