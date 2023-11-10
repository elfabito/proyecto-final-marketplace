import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/material";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const styles = {
  paperContainer: {
    backgroundColor: "#1976d2",
    justifyContent: "center",
    textAlign: "center",
    padding: "3%",
  },
};
export default function StickyFooter() {
  return (
    <Paper style={styles.paperContainer}>
      <Container maxWidth="xxl">
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2 }}
          columns={{ xs: 2, sm: 4, md: 5 }}
          textAlign={"center"}
          justifyContent="space-between"
          margin={6}
          display={"Flex"}
        >
          <Stack spacing={2}>
            <Link href="#">
              <Typography variant="subtitle1" color="white">
                Sobre Nosotros
              </Typography>
            </Link>
            <Link href="#">
              <Typography variant="subtitle1" color="white">
                Terminos y condiciones
              </Typography>
            </Link>
            <Link href="#"></Link>
          </Stack>
          <Stack spacing={2}>
            <Link href="#">
              <Typography variant="subtitle1" color="white">
                Ventas
              </Typography>
            </Link>
            <Link href="#">
              <Typography variant="subtitle1" color="white">
                Alquiler
              </Typography>
            </Link>
            <Link href="#">
              <Typography mb={3} variant="subtitle1" color="white">
                Alquiler Temporal
              </Typography>
            </Link>
          </Stack>
          <Stack spacing={2}>
            <Link href="#">
              <Typography variant="subtitle1" color="white">
                YouTube
              </Typography>
            </Link>
            <Link href="#">
              <Typography variant="subtitle1" color="white">
                Facebook
              </Typography>
            </Link>
            <Link href="#">
              <Typography variant="subtitle1" color="white">
                Twitter
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Paper>
  );
}
