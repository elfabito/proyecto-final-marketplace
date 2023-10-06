import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import "./App.css";

function App() {
  const [seleccion, setSeleccion] = React.useState("venta");

  const handleChange = (event, newSeleccion) => {
    setSeleccion(newSeleccion);
  };

  return (
    <div className="App">
      <div className="Navbar">
        <h1>Navbar</h1>
      </div>
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
            <TextField id="search" label="Localidad" variant="outlined" />
          </Box>
        </div>
      </div>

      <div className="Carousel">
        <h1>Carousel aqui</h1>
      </div>
      <div className="Otros">
        <h1>Otros aqui</h1>
      </div>
    </div>
  );
}

export default App;
