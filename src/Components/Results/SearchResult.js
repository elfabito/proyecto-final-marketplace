import { useEffect } from "react";
import { useState } from "react";
import datos from "./Data/Results";
import RenderResults from "./RenderResults";
import {
  Box,
  Stack,
  Divider,
  Button,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { FilterAlt } from "@mui/icons-material";
import "./SearchResult.css";

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [localidad, setLocalidad] = useState("");
  const [numOfResults, setNumOfResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [thisPage, setThisPage] = useState(1);

  useEffect(() => {
    setThisPage(1);
    setResultsPerPage(5);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    const slice = datos.slice(thisPage - 1, resultsPerPage);
    setResults(slice);
    setLocalidad("Montevideo");
    setNumOfResults(slice.length);
    setTotalResults(datos.length);
  }, [thisPage]);

  return (
    <div className="SearchResult">
      <Container maxWidth="md">
        <Box boxShadow={2}>
          <div className="info">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="stretch"
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={1}
              >
                <Typography
                  component={"h1"}
                  variant="body1"
                  color="text.primary"
                >
                  Venta de casas y apartamentos en {localidad}.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Estás en: info, casas, venta, apartamentos.
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Mostrando {numOfResults} de {totalResults} resultados.
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Button variant="outlined" size="small" startIcon={<MapIcon />}>
                  Ver mapa
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<FilterAlt />}
                >
                  Popularidad
                </Button>
              </Stack>
            </Grid>
          </div>
        </Box>
      </Container>
      <Container className="resultados" maxWidth="lg">
        <Box
          boxShadow={2}
          padding={2}
          sx={{
            width: "70%",
            height: "fit-content",
            margin: "auto",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <main className="results">
            {loading && <p>Cargando...</p>}
            {!loading && (
              <div>
                <RenderResults results={results} />
              </div>
            )}{" "}
          </main>
        </Box>
        <Pagination
          sx={{
            padding: "15px",
            justifyContent: "center",
            display: "flex",
          }}
          onChange={(_, page) => setThisPage(page)}
          page={thisPage}
          count={totalResults}
          color="primary"
        />
      </Container>
    </div>
  );
};

export default SearchResult;
