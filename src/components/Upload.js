import React, { useState } from "react";
import styles from "../styles/Upload.module.css";
function Upload() {
  const [file, setFile] = useState();
  const fileReader = new FileReader();
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;
      };
      fileReader.readAsText(file);
    }
  };

  return (
    <div>
      <div className={styles.upload_container}>
        <img
          src={require("../assets/upload.png")}
          onClick={handleOnChange}
        ></img>
        <h1>Drop your files here</h1>
        <h2>Max file size 12MB</h2>
        <div style={{ textAlign: "center" }}>
          <form>
            <input
              type={"file"}
              id={"csvFileInput"}
              accept={".csv"}
              onChange={handleOnChange}
            />
            <button
              onClick={(e) => {
                handleOnSubmit(e);
              }}
            >
              IMPORT CSV
            </button>
          </form>
        </div>
      </div>
      <div className={styles.upload_container_buttons}>
        <button className={styles.upload_btn1}>Reset</button>
        <button className={styles.upload_btn2}>Next</button>
      </div>
    </div>
  );
}

export default Upload;
