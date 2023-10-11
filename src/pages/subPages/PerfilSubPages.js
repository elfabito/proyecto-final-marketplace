import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import "./PerfilSubPages.css";

const Pagos = () => {
  return (
    <Box height={"100vh"} width={"100%"}>
      <Grid container padding={2} direction="column" spacing={2}>
        <Grid
          item
          display={"flex"}
          justifyContent={"flex-start"}
          width={"100%"}
          xs={12}
          paddingTop={10}
        >
          <Typography variant="h5" color="text.secondary">
            Historial de pagos
          </Typography>
        </Grid>
        <Divider />
        <Grid
          item
          width={"100%"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          xs={12}
        >
          <Typography variant="h5" color="text.secondary">
            No hay pagos Pendientes
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const FavoritosPerfil = () => {
  return (
    <Box height={"100vh"} width={"100%"}>
      <Grid container padding={2} direction="column" spacing={2}>
        <Grid
          item
          display={"flex"}
          justifyContent={"flex-start"}
          width={"100%"}
          xs={12}
          paddingTop={10}
        >
          <Typography variant="h5" color="text.secondary">
            Favoritos
          </Typography>
        </Grid>
        <Divider />
        <Grid
          item
          width={"100%"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          xs={12}
        >
          <Typography variant="h5" color="text.secondary">
            Aún no tienes favoritos agregados
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const Busquedas = () => {
  return (
    <Box height={"100vh"} width={"100%"}>
      <Grid container padding={2} direction="column" spacing={2}>
        <Grid
          item
          display={"flex"}
          justifyContent={"flex-start"}
          width={"100%"}
          xs={12}
          paddingTop={10}
        >
          <Typography variant="h5" color="text.secondary">
            Mi Historial
          </Typography>
        </Grid>
        <Divider />
        <Grid
          item
          width={"100%"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          xs={12}
        >
          <Typography variant="h5" color="text.secondary">
            Aún no has buscado propiedades
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const Consultas = () => {
  return (
    <Box height={"100vh"} width={"100%"}>
      <Grid container padding={2} direction="column" spacing={2}>
        <Grid
          item
          display={"flex"}
          justifyContent={"flex-start"}
          width={"100%"}
          xs={12}
          paddingTop={10}
        >
          <Typography variant="h5" color="text.secondary">
            Mis Consultas
          </Typography>
        </Grid>
        <Divider />
        <Grid
          item
          width={"100%"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          xs={12}
        >
          <Typography variant="h5" color="text.secondary">
            Aún no has realizado consultas
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const Resumen = () => {
  const [userPropiedades, setUserPropiedades] = useState();
  const [userConsultas, setUserConsultas] = useState();
  return (
    <Box height={"100vh"} width={"100%"}>
      <Grid container direction="column" maxWidth={"100%"} spacing={2}>
        <Grid
          item
          display={"flex"}
          width={"100%"}
          height={"200px"}
          justifyContent={"flex-start"}
          alignItems={"flex-end"}
          xs={6}
        >
          <Typography paddingLeft={10} variant="h5" color="text.secondary">
            Mis propiedades
          </Typography>
        </Grid>
        <Divider />
        {userPropiedades ? (
          <Grid
            item
            display={"flex"}
            width={"100%"}
            height={"200px"}
            justifyContent={"center"}
            alignItems={"flex-end"}
            xs={6}
          >
            <Typography variant="h5" color="text.secondary">
              {userPropiedades}
            </Typography>
          </Grid>
        ) : (
          <Grid
            item
            display={"flex"}
            width={"100%"}
            height={"200px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            xs={6}
          >
            <Typography
              paddingBottom={"20px"}
              variant="body1"
              color="text.secondary"
            >
              ¿Querés vender o alquilar una propiedad?
            </Typography>
            <Button variant="contained">Publicar una propiedad</Button>
          </Grid>
        )}
        <Grid
          item
          display={"flex"}
          width={"100%"}
          height={"fit-content"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          xs={6}
        >
          <Typography paddingLeft={10} variant="h5" color="text.secondary">
            Mis Consultas
          </Typography>
        </Grid>
        <Divider />
        {userConsultas ? (
          <Grid
            item
            display={"flex"}
            width={"100%"}
            height={"200px"}
            justifyContent={"center"}
            alignItems={"flex-end"}
            xs={6}
          >
            <Typography variant="h5" color="text.secondary">
              {userConsultas.map((consulta) => (
                <Typography variant="body1" color="text.secondary">
                  {consulta}
                </Typography>
              ))}
            </Typography>
          </Grid>
        ) : (
          <Grid
            item
            display={"flex"}
            width={"100%"}
            height={"200px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            xs={6}
          >
            <Typography
              paddingBottom={"20px"}
              variant="h5"
              color="text.secondary"
            >
              Todavia no tienes consultas
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export { Pagos, Resumen, FavoritosPerfil, Busquedas, Consultas };
