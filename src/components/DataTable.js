import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Radio } from "@mui/material";
import styles from "../styles/DataTable.module.css";

// function createData({
//   names: String,
//   calories: Number,
//   fat: Number,
//   carbs: Number,
//   protein: Number,
// }) {
//   return { names, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

function DataTable({ rows, index }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1050 }} size="small" aria-label="a dense table">
        <TableBody>
          {/* {rows.map((row) => ( */}
          <TableRow
            key="123"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" style={{ width: 50 }}>
              {index + 1}
            </TableCell>
            <TableCell
              //   align="left"
              component="th"
              scope="row"
              style={{ width: 130 }}
            >
              {rows}
            </TableCell>
            <TableCell align="left" style={{ width: 100 }}>
              <select name="datatype" id="datatype" className={styles.select}>
                <option value="int" className={styles.option}>
                  INT
                </option>
                <option value="decimal" className={styles.option}>
                  Decimal
                </option>
                <option value="float" className={styles.option}>
                  Float
                </option>
              </select>
            </TableCell>
            <TableCell style={{ width: 100 }}>
              {/* <Radio defaultValue="p_stnet" value={index}></Radio> */}
              <form id="aform" name="aform" method="POST">
                {rows == "p_stnet" ? (
                  <input
                    name="chkBox_1"
                    type="checkbox"
                    checked
                    value="1"
                    readonly
                    defaultChecked={true}
                  />
                ) : (
                  <input
                    name="chkBox_2"
                    type="checkbox"
                    value=""
                    disabled={true}
                    defaultChecked={false}
                  />
                )}
              </form>
            </TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
