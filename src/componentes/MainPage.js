import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";

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
            <CustomSelectCheckmarks options={options_default} />
            <TextField id="search" label="Localidad" variant="outlined" />
            <div className="carrousel-container">
              <Carrousel />
            </div>
          </Box>
        </div>
      </div>
      <footer>
        <div id="footerReferences">
          <div>
            <a href="#">Alquileres</a>
          </div>
          <div>
            <a href="#">Alquileres temporales</a>
          </div>
          <div>
            <a href="#">Ventas</a>
          </div>
        </div>
        <div>
          <p>Todos los derechos reservados. 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
