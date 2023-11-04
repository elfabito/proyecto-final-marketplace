import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(uno, dos, tres) {
  return { uno, dos, tres };
}
const rows = [
  createData("Dato1", 159, 6.0, 12),
  createData("Dato2", 237, 9.0, 37, 4.3),
  createData("Dato3", 262, 16.0, 24, 6.0),
  createData("Dato4", 305, 3.7, 67, 4.3),
  createData("Dato5", 356, 16.0, 49, 3.9),
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <h2 style={{ color: "#2074d4" }}>Propiedades:</h2>
          <TableRow>
            <TableCell style={{ width: "25%" }}>Codigo </TableCell>
            <TableCell style={{ width: "25%" }} align="center">
              Lugar
            </TableCell>
            <TableCell style={{ width: "25%" }} align="center">
              Precio
            </TableCell>
            <TableCell style={{ width: "25%" }} align="center">
              Botones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.uno}
              </TableCell>
              <TableCell align="center">{row.dos}</TableCell>
              <TableCell align="center">{row.tres}</TableCell>
              <TableCell align="center">
                {" "}
                <Button variant="contained" color="primary">
                  Publicar
                </Button>{" "}
                <Button variant="contained" color="primary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
