import { useEffect } from "react";
import { useState } from "react";
import datos from "./Data/Results";
import RenderResults from "./RenderResults";
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";

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
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item xs={6} md={8}>
                <Typography variant="body2" color="text.primary">
                  Venta de casas y apartamentos en {localidad}
                </Typography>
              </Grid>

              <Grid item xs={6} md={8}>
                <Typography variant="body2" color="text.secondary">
                  Estás en: info casas, venta, apartamentos
                </Typography>
              </Grid>
              <Grid item xs={6} md={8}>
                <Typography variant="body2" color="text.primary">
                  Mostrando {numOfResults} de {totalResults}
                </Typography>
              </Grid>
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
          count={totalResults}
          color="primary"
        />
      </Container>
    </div>
  );
};

export default SearchResult;
