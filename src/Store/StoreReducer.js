import {
  ListadoPropiedades,
  ListadoLocalidades,
  ListadoTipoPropiedad,
  ListadoCantidadDormitorios,
  ListadoBaños,
  ListadoTipoDePublicacion,
  ListadoMoneda,
  ListadoDeEstado,
  ListadoComodidades,
  ListadoOpciones,
  ListadoAtributos,
  nombreDeGuardadoDeLosAtributos,
} from "./Data.js";

const initialStore = () => {
  const store = {
    propiedades: ListadoPropiedades,
    localidades: ListadoLocalidades,
    tipoPropiedad: ListadoTipoPropiedad,
    dormitorios: ListadoCantidadDormitorios,
    baños: ListadoBaños,
    opcion: ListadoOpciones,
    publicacion: ListadoTipoDePublicacion,
    moneda: ListadoMoneda,
    estado: ListadoDeEstado,
    comodidad: ListadoComodidades,
    atributos: ListadoAtributos,
    nombreAtributosGuardado: nombreDeGuardadoDeLosAtributos,
    filters: {
      ubicacion: "",
      estado: "",
      tipoDePropiedad: "",
      dormitorio: "",
      tipoMoneda: "",
      maxPrice: "",
      comodidades: "",
      tipoVenta: "",
    },
  };
  return store;
};

const types = {
  setProperty: "setProperty",
  setFilters: "setFilters",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setProperty:
      console.log("asdadas ", action.payload);
      return {
        ...state,
        propiedades: state.propiedades.push({ ...action.payload }),
      };
    case types.setFilters:
      return {
        ...state,
        filters: { ...action.payload },
      };

    default:
      return state;
  }
};

export { types };
export { initialStore };
export default storeReducer;
