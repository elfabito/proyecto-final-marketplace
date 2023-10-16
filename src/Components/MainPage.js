import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "./MainPage.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MainPage() {
  const [seleccion, setSeleccion] = React.useState("venta");

  const options_default = [
    "Casa",
    "Apartamento",
    "Terreno",
    "Local Comercial",
    "Oficina",
    "Chacra o Campo",
    "Garage o Cochera",
  ];

  const handleChange = (event, newSeleccion) => {
    setSeleccion(newSeleccion);
  };
  return (
    <div className="App">
      <div className="SearchBackground">
        <div className="Search">
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={seleccion}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              id="opciones"
            >
              <ToggleButton value="venta">Venta</ToggleButton>
              <ToggleButton value="alquiler">Alquiler</ToggleButton>
              <ToggleButton value="alquilertemporal">
                Alquiler Temporal
              </ToggleButton>
            </ToggleButtonGroup>

            <div className="contenedorBusqueda">
              <CustomSelectCheckmarks options={options_default} />
              <TextField id="search" label="Localidad" variant="outlined" />
              <Button variant="contained">Buscar</Button>
            </div>
          </Box>
        </div>
      </div>
      <div className="carrousel-container">
        <Carrousel />
      </div>
      <footer>
        <div>
          <Grid container spacing={2} columns={16}>
            <Grid xs={4}>
              <Item>
                <a href="#">Sobre nosotros</a>
              </Item>
            </Grid>
            <Grid xs={8}>
              <Item>
                <a href="#">Alquiler</a>
              </Item>
              <Item>
                <a href="#">Alquiler Temporal</a>
              </Item>
              <Item>
                <a href="#">Venta</a>
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>
                <a href="#">Terminos y condiciones</a>
              </Item>
            </Grid>
          </Grid>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
