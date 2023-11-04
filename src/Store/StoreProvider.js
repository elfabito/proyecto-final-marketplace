import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";
import React from "react";

const storeContext = createContext()
const intialData = initialStore()
export const filterParams = {
  localidad: "",
  tipodeventa: "",
  tipoDePropiedad: [""],
};
export const filterResults = (results) => {
  const filteredResults = results.filter((result) => {
    return (
      result.tipoVenta.includes(filterParams.tipodeventa) &&
      (result.ubicacion[1].includes(filterParams.localidad) ||
        result.ubicacion[0].includes(filterParams.localidad)) &&
      result.tipoDePropiedad.includes(filterParams.tipoDePropiedad[0])
    );
  });

  return filteredResults;
};

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, intialData);
  const [filteredResults, setFilteredResults] = React.useState([]);
  const filterResults = (results, filterLocalidad, filterTipoVenta) => {
    const filteredResults = results.filter((result) => {
      return (
        result.tipoVenta
          .toLowerCase()
          .includes(filterTipoVenta.toLowerCase()) &&
        (result.ubicacion[1]
          .toLowerCase()
          .includes(filterLocalidad.toLowerCase()) ||
          result.ubicacion[0]
            .toLowerCase()
            .includes(filterLocalidad.toLowerCase()))
      );
    });

    return filteredResults;
  };
  return (
    <storeContext.Provider value={[store, dispatch]}>
      {children}
    </storeContext.Provider>
  );
};

export { storeContext };
export default StoreProvider