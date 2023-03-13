import { ChangeEvent, useState } from "react";
import styles from "../styles/Upload.module.css";
import Papa from "papaparse";
import xtype from "xtypejs";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function Upload() {
  const [file, setFile] = useState();
  const [selected, setSelected] = useState(false);
  const [state, setState] = useState(1);

  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const handleChange1 = (file) => {
    setFile(file);
  };

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
        setSelected(true);
      },
    });
  };

  const UploadFile = async () => {
    fetch("http://192.168.15.15:5000/api/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        file: file,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  return (
    <div>
      {state == 1 ? (
        <div>
          <div className={styles.upload_container}>
            <img
              src={require("../assets/upload.png")}
              onClick={changeHandler}
              // onClick={handleFileChange}
            ></img>
            <h1>Drop your files here</h1>
            <h2>Max file size 12MB</h2>
            {/* <div style={{ textAlign: "center" }}>
              <div>
                <input type="file" onChange={handleFileChange} />

                <button onClick={handleUploadClick}>Upload</button>
              </div>
            </div> */}
          </div>
          {/* <FileUploader
            handleChange={handleChange1}
            name="file"
            types={fileTypes}
          /> */}
          <div>
            {/* File Uploader */}
            <input
              type="file"
              name="file"
              onChange={changeHandler}
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
      ) : (
        <div>
          {/* {tableRows.map((rows, index) => {
            return (
              <div className={styles.checkbox_main_container}>
                <div className={styles.checkbox_container} key={index}>
                  <h1>{rows}</h1>
                  <input type="checkbox"></input>
                </div>
              </div>
            );
          })} */}
          <table>
            <tr>
              <th>Column</th>
              <th>Parameter</th>
              <th>Datatype</th>
              <th>Select Total Revenue Column</th>
            </tr>
            {tableRows.map((rows, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{rows}</td>
                  <td>INT</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                </tr>
              );
            })}
          </table>

          {/* <div className={styles.checkbox_container}>
            <h1>Sales_tax</h1>
            <input type="checkbox"></input>
          </div> */}
          <table>
            {/* <thead>
              <tr>
                {tableRows.map((rows, index) => {
                  return <th key={index}>{rows}</th>;
                })}
              </tr>
            </thead> */}
            {/* <tbody>
              {values.map((value, index) => {
                return (
                  <tr key={index}>
                    {value.map((val, i) => {
                      return (
                        <td key={i}>
                          {val} {`${xtype.type({ val })}`}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody> */}
          </table>
        </div>
      )}

      {selected ? (
        <div className={styles.upload_container_buttons}>
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
        </div>
      ) : (
        <div></div>
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
    </div>
  );
}

export default Upload;

// const handleFileChange = (e) => {
//   if (e.target.files) {
//     setFile(e.target.files[0]);
//     setFile(true);
//   }
// };

// const handleUploadClick = () => {
//   if (!file) {
//     return;
//   }

//   // 👇 Uploading the file using the fetch API to the server
//   fetch("https://httpbin.org/post", {
//     method: "POST",
//     body: file,
//     // 👇 Set headers manually for single file upload
//     headers: {
//       "content-type": file.type,
//       "content-length": `${file.size}`, // 👈 Headers need to be a string
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// };
