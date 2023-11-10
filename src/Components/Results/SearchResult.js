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

import { storeContext, filterParams } from "../../Store/StoreProvider";
import Filters from "../Filters";

const SearchResult = () => {
  const [numOfResults, setNumOfResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const [filteredResults, setFilteredResults] = useState([]);
  const [store, dispatch] = useContext(storeContext);
  const filter = (results) => {
    const filterResults = results.filter((result) => {
      console.log(result.tipoVenta);
      console.log(filterParams.TipoDePublicacion);
      console.log(result.ubicacion);
      console.log(filterParams.localidad);
      console.log(result.estado);
      console.log(filterParams.estado);
      console.log(result.tipoDePropiedad);
      console.log(filterParams.tipo);
      console.log(result.dormitorio);
      console.log(filterParams.dormitorios);
      console.log(result.tipoMoneda);
      console.log(filterParams.moneda);
      console.log(result.precio);
      console.log(filterParams.maxPrice);
      console.log(result.comodidades);
      console.log(filterParams.comodidad);

      console.log(result.tipoMoneda);

      return (
        result.ubicacion.includes(filterParams.localidad) &&
        filterParams.estado.includes(result.estado) &&
        filterParams.TipoDePublicacion === result.tipoVenta &&
        filterParams.dormitorios.includes(result.dormitorio) &&
        filterParams.moneda.includes(result.tipoMoneda) &&
        result.precio >= filterParams.maxPrice
      );
    });
    console.log(filterResults);
    return filterResults;
  };

  useEffect(() => {
    const filterResults = filter(results);
    setFilteredResults(filterResults);
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
      <Container maxWidth="xxl">
        <div className="info">
          <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={1}
            textAlign={"center"}
            justifyContent={"center"}
            marginTop={4}
          >
            <Typography
              component={"h1"}
              variant="body1"
              color="text.primary"
              alignContent={"center"}
              textAlign={"center"}
            >
              Venta de casas y apartamentos en {filterParams.localidad}.
            </Typography>
            <Typography
              textAlign={"center"}
              alignContent={"center"}
              variant="body2"
              color="text.secondary"
            >
              Estás en: {filterParams.TipoDePublicacion}, {filterParams.tipo}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Mostrando {numOfResults} resultados.
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1 }}
            gap={{ xs: 1, sm: 1 }}
            columns={{ xs: 1, sm: 1, md: 1 }}
            textAlign={"center"}
            justifyContent={"center"}
            display={"Flex"}
            flexWrap={"wrap"}
            alignItems="flex-start"
          >
            <Button variant="outlined" size="small" startIcon={<MapIcon />}>
              Ver mapa
            </Button>
            <Button variant="outlined" size="small" startIcon={<FilterAlt />}>
              Popularidad
            </Button>
          </Stack>
        </div>
      </Container>
      <Box marginTop={4}>
        <Filters />
      </Box>
      <Container maxWidth="xxl">
        <Box
          boxShadow={2}
          padding={2}
          sx={{
            width: "100%",
            height: "fit-content",
            margin: "auto",

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
