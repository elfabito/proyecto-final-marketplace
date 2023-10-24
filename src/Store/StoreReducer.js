import {ListadoPropiedades, ListadoLocalidades, ListadoTipoPropiedad, ListadoCantidadDormitorios, ListadoBaños, ListadoGarage, ListadoTipoDePublicacion, ListadoMoneda} from "./Data.js"


const initialStore = () => {
    const store = {
        propiedades: ListadoPropiedades,
        localidades: ListadoLocalidades,
        tipoPropiedad: ListadoTipoPropiedad,
        dormitorios: ListadoCantidadDormitorios,
        baños: ListadoBaños,
        garage: ListadoGarage,
        publicacion: ListadoTipoDePublicacion,
        moneda: ListadoMoneda
    }
    return store
}

const types = {
    setProperty: 'setProperty',
    
}

const storeReducer = (state, action) =>{
    switch(action.type){
        case types.setProperty:
            return({
                ...state, 
                propiedades: state.propiedades.push(...action.payload)
            });
        
        default:
            return state;
    }
}


export { types }
export { initialStore }
export default storeReducer