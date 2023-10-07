import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";

function MainPage() {
  const [seleccion, setSeleccion] = React.useState("venta");

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
            <TextField id="search" label="Localidad" variant="outlined" />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default MainPage;