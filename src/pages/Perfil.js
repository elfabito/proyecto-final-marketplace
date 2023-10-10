import React, { useState } from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Perfil = () => {
  const [userName, setUserName] = useState("Guille");
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stack
            direction="column"
            justifyContent="left"
            alignItems="center"
            spacing={2}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://cdn2.infocasas.com.uy/web/default-user-new.png"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h4" gutterBottom>
              {userName}
            </Typography>
            <Typography variant="h6">Resumen</Typography>
            <Typography variant="body1">Mis Finanzas</Typography>
            <Link href="#" textDecoration="none">
              {"Pagos"}
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </Container>
  );
};

export default Perfil;
