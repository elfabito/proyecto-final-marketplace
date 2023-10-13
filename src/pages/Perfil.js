import React, { useState } from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./subPages/PerfilSubPages.css";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { Route, Routes, Link, Outlet } from "react-router-dom";

const Perfil = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Guille");

  return (
    <Container maxWidth="lg">
      <Grid container boxShadow={2} direction="row" spacing={0.5}>
        <Grid padding={2} xs={3}>
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
                  padding={2}
                  alt="Remy Sharp"
                  src="https://cdn2.infocasas.com.uy/web/default-user-new.png"
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item padding={2} width={"fit-content"} xs={8}>
                <Typography variant="h5" color="text.secondary">
                  {userName}
                  <IconButton aria-label="edit" size="small">
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Link
                  className="Link"
                  to="/Perfil"
                  color="inherit"
                  underline="hover"
                  textDecoration="none"
                >
                  Resumen
                </Link>
              </Grid>
              <Grid item width={"fit-content"} xs={6}>
                <Typography variant="body1" color="text.secondary">
                  Mis Finanzas
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Link
                  className="Link"
                  to="Pagos"
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
                  className="Link"
                  to="Favoritos"
                  color="inherit"
                  underline="hover"
                  textDecoration="none"
                >
                  Favoritos
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  className="Link"
                  to="Busquedas"
                  color="inherit"
                  underline="hover"
                  textDecoration="none"
                >
                  Historial
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  className="Link"
                  to="Consultas"
                  color="inherit"
                  underline="hover"
                  textDecoration="none"
                >
                  Consultas
                </Link>
              </Grid>
              <Grid item paddingTop={3} width={"fit-content"} xs={8}>
                <Button width={"fit-content"} variant="contained">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/PublicarPropiedad"
                  >
                    Publicar propiedad
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Perfil;
