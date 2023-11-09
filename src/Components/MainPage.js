import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import "./MainPage.css";
import CustomAutoComplete from "./CustomAutoComplete";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { filterParams } from "../Store/StoreProvider";
import Footer from "./Footer";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
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

  const handleChange = (event, value) => {
    setSeleccion(value);
    filterParams.tipodeventa = value;
  };
  const styles = {
    paperContainer: {
      height: 120,
      backgroundImage: `url(${"https://source.unsplash.com/random"})`,
      justifyContent: "center",
      textAlign: "center",
      padding: "10%",
    },
  };

  return (
    <div>
      <Paper style={styles.paperContainer}>
        <Container maxWidth="xxl">
          <ToggleButtonGroup
            color="primary"
            value={seleccion}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            id="opciones"
          >
            <ToggleButton value="Venta">Venta</ToggleButton>
            <ToggleButton value="Alquiler">Alquiler</ToggleButton>
            <ToggleButton value="Alquiler temporal">
              Alquiler Temporal
            </ToggleButton>
          </ToggleButtonGroup>

          <Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, md: 2 }}
              textAlign={"center"}
              justifyContent={"center"}
            >
              <CustomSelectCheckmarks options={options_default} />
              <CustomAutoComplete />
            </Stack>
            <Link to={"/resultados"}>
              <Button type="submit" variant="contained">
                Buscar
              </Button>
            </Link>
          </Box>
        </Container>
      </Paper>

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
