import * as React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const RenderResults = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 20,
    minWidth: 280,
  }));
  const [results, setResults] = React.useState([]);
  useEffect(() => {
    setResults(props.results);
  }, [props.results]);

  return (
    <div justifyContent="center" textAlign="center">
      {" "}
      {!results ? (
        <p>No hay resultados</p>
      ) : (
        <Container maxWidth="xxl">
          {results &&
            results.map((result) => (
              <Grid key={result.id} item xs={8}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",

                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: 151,
                        justifyContent: "center",
                        textAlign: "center",

                        alignItems: "center",
                      }}
                      image={null}
                      alt="Inmueble"
                      src={result.imgsrc[0]}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "right",
                        alignItems: "center",
                        flexWrap: "wrap",
                        margin: "15",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          USD {result.precio}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          {result.ubicacion[0] + ", " + result.ubicacion[1]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {result.disposicion} - {result.dormitorios}{" "}
                          dormitorios - {result.banos > 1 ? "baños" : "baño"} -{" "}
                          {result.m2terreno} m2
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Tipo de venta : {result.tipoVenta}
                        </Typography>
                      </CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {result.descripcion}
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
            ))}
        </Container>
      )}
    </div>
  );
};

export default RenderResults;
