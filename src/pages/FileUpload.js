import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

function FileUpload() {
  const [file, setFile] = useState();
  const cookies = new Cookies();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const mycookie = cookies.get("token");

  function handleSubmit(event) {
    event.preventDefault();
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
      console.log(response.data);
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;
