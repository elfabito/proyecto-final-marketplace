import React from "react";
import { storeContext } from "../Store/StoreProvider";
import { useContext } from "react";
import RenderResults from "../Components/Results/RenderResults";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Proyectos = () => {
  const [store, dispatch] = useContext(storeContext);

  let filtered = store.propiedades.filter((prop) => {
    return prop.estado === "Sin construcción";
  });

  return (
    <>
      <Container fixed>
        <Box m={2} pt={3}>
          <ThemeProvider theme={theme}>
            <Typography mb={3} variant="h4" color="#1976d2">
              Proyectos en construcción
            </Typography>
          </ThemeProvider>
          <RenderResults results={filtered} />
        </Box>
      </Container>
    </>
  );
};

export default Proyectos;
