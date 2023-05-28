import { ChangeEvent, useState } from "react";
import styles from "../styles/Upload.module.css";
import Papa from "papaparse";
import xtype from "xtypejs";
import { FileUploader } from "react-drag-drop-files";
import DataTable from "./DataTable";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import TableContainer from "@mui/material/TableContainer";
import Visual from "../pages/Visual";
import BubbleChart from "../Chart/BubbleChart";
import PieChart from "../Chart/PieChart";
import LineChart from "../Chart/LineChart";
import BarChart from "../Chart/BarChart";
import Cookies from "universal-cookie";
import { FileDataAction } from ".././actions/FileData";
import { useSelector, useDispatch } from "react-redux";

const fileTypes = ["JPG", "PNG", "GIF"];

function Upload() {
  const MyFileData = useSelector((state) => state.FileDataReducer);
  console.log("data From Reducer");
  console.log(MyFileData);
  console.log("data From Reducer");

  const dispatch = useDispatch();

  const cookies = new Cookies();
  const mycookie = cookies.get("token");
  const [file, setFile] = useState();
  const [selected, setSelected] = useState(false);
  const [state, setState] = useState(1);
  const [collectDatatypes, setCollectDataTypes] = useState();

  const [tableRows, setTableRows] = useState([]);
  const [parsedData, setParsedData] = useState([]);

  const [newData, setNewData] = useState({
    labels: parsedData.map((data) => data.index),
    datasets: [
      {
        label: "p_stnet",
        data: parsedData.map((data) => data.p_stnet),
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
  const [values, setValues] = useState([]);

  function handleChange(event) {
    setFile(event.target.files[0]);
    setSelected(true);

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
        console.log("Parsed Data");
        dispatch(
          FileDataAction({
            filedata: results.data,
          })
        );

        console.log(results.data);
        console.log("Parsed Data");

        setNewData({
          labels: results.data.map((data) => data.index),
          datasets: [
            {
              label: "p_stnet",
              data: results.data.map((data) => data.p_stnet),
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

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  }

  function handleSubmit(event) {
    // event.preventDefault();
    const url = "http://127.0.0.1:8000/upload_file/";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `${mycookie.token_type} ${mycookie.access_token}`,
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data.columns);
      setCollectDataTypes(response.data.columns);
      // console.log(collectDatatypes);
    });
  }

  const SaveDataset = async () => {
    fetch("http://127.0.0.1:8000/save_dataset/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${mycookie.token_type} ${mycookie.access_token}`,
      },
      body: JSON.stringify({
        primary: "index",
        prediction_value: "p_stnet",
        columns: collectDatatypes,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const Predict = async () => {
    fetch("http://127.0.0.1:8000/model/predict/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${mycookie.token_type} ${mycookie.access_token}`,
      },
      body: JSON.stringify({
        // primary: "index",
        // prediction_value: "p_stnet",
        key: collectDatatypes,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Predicted");
        console.log(data);
        console.log("Predicted");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {state == 1 ? (
          <div>
            <div className={styles.upload_container}>
              <img src={require("../assets/upload.png")}></img>
              <h1>Drop your files here</h1>
              <h2>Max file size 12MB</h2>
            </div>

            <div>
              {/* File Uploader */}
              <input
                type="file"
                name="file"
                onChange={handleChange}
                // onChange={handleChange}
                accept=".csv"
                style={{ display: "block", margin: "10px auto" }}
              />
              <br />
              <br />
              {/* Table */}
            </div>

            {selected ? (
              <div className={styles.uploaded_file}>
                <h1> {file && `${file.name} - ${file.type}`}</h1>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : state == 2 ? (
          <div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell style={{ width: 50 }}>Index</TableCell>
                    <TableCell style={{ width: 130 }}>Columns</TableCell>
                    <TableCell style={{ width: 100 }}>Datatype</TableCell>
                    <TableCell style={{ width: 100 }}>
                      Value to be predicted
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>

            {tableRows.map((rows, index) => {
              return (
                <DataTable rows={rows} index={index} key={index}></DataTable>
              );
            })}
            {/* <BubbleChart chartData={newData}></BubbleChart> */}
            <div className={styles.dashboard_dashbar}>
              <div className={styles.box_third}>
                <div className={styles.box_third1}>
                  <BarChart chartData={newData} />
                </div>
                <div className={styles.box_third1}>
                  <LineChart chartData={newData}></LineChart>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Overview</div>
        )}

        {selected ? (
          <div className={styles.upload_container_buttons}>
            {state == 1 ? (
              <button
                className={styles.upload_btn1}
                onClick={() => {
                  setState(1);
                }}
              >
                Reset
              </button>
            ) : (
              <></>
            )}
            {state == 1 ? (
              <button
                className={styles.upload_btn2}
                onClick={() => {
                  // UploadFile();
                  // PostForm();
                  // handleSubmit();
                  handleSubmit();
                  setState(2);
                }}
                type="submit"
              >
                Upload
              </button>
            ) : state == 2 ? (
              <>
                <button
                  className={styles.upload_btn2}
                  onClick={() => {
                    setState(3);
                  }}
                >
                  Next
                </button>

                <button
                  className={styles.upload_btn2}
                  onClick={() => {
                    SaveDataset();
                    setState(3);
                  }}
                >
                  SaveDataset
                </button>
              </>
            ) : (
              <div>
                <button
                  className={styles.upload_btn2}
                  onClick={() => {
                    Predict();
                  }}
                >
                  Predict
                </button>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}

        {/* <div className={styles.upload_container_buttons}>
        <button
          className={styles.upload_btn1}
          onClick={() => {
            setState(1);
          }}
        >
          Reset
        </button>
        <button
          className={styles.upload_btn2}
          onClick={() => {
            setState(2);
          }}
        >
          Next
        </button>
      </div> */}
      </form>
    </div>
  );
}

export default Upload;
