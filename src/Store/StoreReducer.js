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
  ListadotypesDeAtributos,
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
    typesAtributos: ListadotypesDeAtributos,
    nombreAtributosGuardado: nombreDeGuardadoDeLosAtributos,
  };
  return store;
};

const types = {
  setProperty: "setProperty",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setProperty:
      return {
        ...state,
        propiedades: state.propiedades.push(...action.payload),
      };

    default:
      return state;
  }
};

export { types };
export { initialStore };
export default storeReducer;
