import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";

import CustomAutoComplete from "./CustomAutoComplete";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { filterParams } from "../Store/StoreProvider";
import Footer from "./Footer";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import SearchResult from "./Results/SearchResult";

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
    filterParams.TipoDePublicacion = value;
  };
  const styles = {
    paperContainer: {
      backgroundImage: `url(${"https://source.unsplash.com/random"})`,

      justifyContent: "center",
      textAlign: "center",

      padding: "10%",
    },
  };
  const handleclick = () => {
    <SearchResult />;
  };
  return (
    <div>
      <Box margin={"auto"} alignItems={"center"} justifyContent={"center"}>
        <Paper style={styles.paperContainer}>
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

          <Stack
            direction={"row"}
            textAlign={"center"}
            justifyContent={"center"}
            width={"100%"}
            display={"Flex"}
            alignContent={"center"}
            flexWrap={"wrap"}
            spacing={1}
            gap={1}
            marginBottom={1}
          >
            <CustomSelectCheckmarks options={options_default} />
            <CustomAutoComplete />
          </Stack>
          <Link to={"/resultados"}>
            <Button onClick={handleclick} type="submit" variant="contained">
              Buscar
            </Button>
          </Link>
        </Paper>
      </Box>
      <Container maxWidth="xxl">
        <Box marginBottom={4} marginTop={5}>
          <Carrousel />
        </Box>
      </Container>

      <Paper>
        <Footer />
      </Paper>
    </div>
  );
}

export default MainPage;
