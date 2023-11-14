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
  Typography,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { FilterAlt } from "@mui/icons-material";

import { storeContext } from "../../Store/StoreProvider";
import Filters from "../Filters";

const SearchResult = () => {
  const [numOfResults, setNumOfResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const [filteredResults, setFilteredResults] = useState([]);
  const [store, dispatch] = useContext(storeContext);
  console.log(store.filters);

  // const filterToApply = store.filters.map((filter) => {
  //   if (filter) {
  //     return filter;
  //   }
  // });

  // console.log("filter =>", filter);
  const filter = (results) => {
    const filterResults = results.filter((result) => {
      if (store.filters.localidad?.length > 0) {
        // store.filters.localidad.map((ubic) => {
        //   if (result.ubicacion.includes(ubic)) {
        //     return true;
        //   }
        // });
        console.log(store.filters.localidad);

        if (store.filters.localidad.includes(result.ubicacion[1])) {
          return true;
        }
      }
      if (store.filters.estado?.length > 0) {
        if (store.filters.estado.includes(result.estado)) {
          return true;
        }
      }

      if (store.filters.ListadoTipoDePublicacion?.length > 0) {
        // store.filters.TipoDePublicacion.map((tipo) => {
        //   if (result.tipoVenta === tipo) {
        //     return true;
        //   }
        // });
        if (store.filters.ListadoTipoDePublicacion.includes(result.tipoVenta)) {
          return true;
        }
      }
      if (store.filters.tipo?.length > 0) {
        if (store.filters.tipo.includes(result.tipoDePropiedad)) {
          return true;
        }
      }
      if (store.filters.dormitorios?.length > 0) {
        if (store.filters.dormitorios.includes(result.dormitorio)) {
          return true;
        }
      }
      if (store.filters.moneda?.length > 0) {
        if (store.filters.dormitorios.includes(result.dormitorio)) {
          return true;
        }
      }
      // result.ubicacion?.includes(store.filters.ubicacion) ||
      // store.filters.estado?.includes(result.estado) ||
      // store.filters.TipoDePublicacion === result.tipoVenta ||
      // store.filters.dormitorios?.includes(result.dormitorio) ||
      // store.filters.moneda?.includes(result.tipoMoneda)
    });
    console.log(filterResults);
    setFilteredResults(filterResults);
    return filterResults;
  };

  // useEffect(() => {
  //   const filterResults = filter(results);
  //   setFilteredResults(filterResults);
  // }, [results]);

  useEffect(() => {
    filter(store.propiedades);
  }, [store.filters]);

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
              Venta de casas y apartamentos en {store.filters.localidad}.
            </Typography>
            <Typography
              textAlign={"center"}
              alignContent={"center"}
              variant="body2"
              color="text.secondary"
            >
              Estás en: {store.filters.TipoDePublicacion}, {store.filters.tipo}
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
