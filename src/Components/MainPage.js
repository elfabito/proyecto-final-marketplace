import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import Autocomp from "./Autocomp";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import "./MainPage.css";

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
              <Autocomp />
              <Button variant="contained">Buscar</Button>
            </div>
          </Box>
        </div>
      </div>
      <div className="carrousel-container">
        <Carrousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
