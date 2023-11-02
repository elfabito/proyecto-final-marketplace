import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import RenderResults from "./RenderResults";
import {
  Box,
  Stack,
  Divider,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { FilterAlt } from "@mui/icons-material";
import "./SearchResult.css";
import {
  storeContext,
  filterResults,
  filterParams,
} from "../../Store/StoreProvider";
import Filters from "../Filters";
const SearchResult = () => {
  const [numOfResults, setNumOfResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const [filteredResults, setFilteredResults] = useState([]);
  const [store, dispatch] = useContext(storeContext);

  useEffect(() => {
    const filteredResults = filterResults(results);
    setFilteredResults(filteredResults);
  }, [results]);
  useEffect(() => {
    setResults(store.propiedades);
  }, [store.propiedades]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setTimeout(() => {}, 1500);
  }, []);

  useEffect(() => {
    if (filteredResults.length > 0) {
      setNumOfResults(filteredResults.length);
    } else {
      setNumOfResults(0);
    }
  }, [filteredResults]);

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
                  Venta de casas y apartamentos en {filterParams.localidad}.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Estás en: {filterParams.tipodepropiedad},{" "}
                  {filterParams.tipoDeVenta}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Mostrando {numOfResults} resultados.
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
      <Filters />
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
                {filteredResults.length > 0 && (
                  <RenderResults results={filteredResults} />
                )}
              </div>
            )}{" "}
          </main>
        </Box>
      </Container>
    </div>
  );
};

export default SearchResult;
