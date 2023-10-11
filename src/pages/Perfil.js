import React, { useState } from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const Perfil = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Guille");
  const [userPropiedades, setUserPropiedades] = useState();
  const [userConsultas, setUserConsultas] = useState();
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" spacing={0.5}>
        <Grid xs={3}>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            height={"100vh"}
            width={"100%"}
            paddingTop={10}
            paddingRight={10}
          >
            <Grid container direction="column" spacing={2}>
              <Grid item xs={6}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn2.infocasas.com.uy/web/default-user-new.png"
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" color="text.secondary">
                  {userName}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.primary" gutterBottom>
                  Resumen
                </Typography>
              </Grid>
              <Grid item width={"fit-content"} xs={6}>
                <Typography variant="body1" color="text.secondary">
                  Mis Finanzas
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  textDecoration="none"
                >
                  {"Pagos"}
                </Link>
              </Grid>
              <Grid item width={"fit-content"} xs={6}>
                <Typography variant="body1" gutterBottom color="text.secondary">
                  Mis busquedas
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  textDecoration="none"
                >
                  Favoritos
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  textDecoration="none"
                >
                  Busquedas
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  textDecoration="none"
                >
                  Consultas
                </Link>
              </Grid>
              <Grid item width={"fit-content"} xs={8}>
                <Button width={"fit-content"} variant="contained">
                  Publicar propiedad
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={8}>
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
                <Typography
                  paddingLeft={10}
                  variant="h5"
                  color="text.secondary"
                >
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
                <Typography
                  paddingLeft={10}
                  variant="h5"
                  color="text.secondary"
                >
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Perfil;
