import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { storeContext } from "../Store/StoreProvider"
import { autoPlay } from 'react-swipeable-views-utils';

function createData(uno, dos, tres) {
  return { uno, dos, tres };
}

const rows = [
  createData('Dato1', 159, 6.0),
  createData('Dato2', 237, 9.0),
  createData('Dato3', 262, 16.0),
  createData('Dato4', 305, 3.7),
  createData('Dato5', 356, 16.0),
];

export default function DataTable() {
  const [store, dispatch] = React.useContext(storeContext);
  const arrayProp = store?.propiedades;

  function tomarDatosStore() {
    const primerosCincoDatos = [];

    for (let i = 0; i < 5 && i < arrayProp.length; i++) {
      const dato = arrayProp[i];
      primerosCincoDatos.push(dato);
    }

    return primerosCincoDatos;
  }

  const datosDelCarrousel = tomarDatosStore();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = datosDelCarrousel.length;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <h2 style={{ color: '#2074d4' }}>Propiedades:</h2>
          <TableRow>
            <TableCell style={{ width: '25%' }}>Codigo</TableCell>
            <TableCell style={{ width: '25%' }} align="center">Lugar</TableCell>
            <TableCell style={{ width: '25%' }} align="center">Precio</TableCell>
            <TableCell style={{ width: '25%' }} align="center">Botones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datosDelCarrousel.map((step, index) => (
            <TableRow
              key={step.uno}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{step.id}</TableCell>
              <TableCell align="center">{step.ubicacion}</TableCell>
              <TableCell align="center">{step.precio}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="primary">Publicar</Button>
                <Button variant="contained" color="primary">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
