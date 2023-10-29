import React from 'react'
import DetallePropiedad from '../Components/IndexDetallesPropiedad'
import { storeContext } from "../Store/StoreProvider"
const Alquiler = () => {
  const [store] = React.useContext(storeContext)
  return (
    <div>
      <DetallePropiedad store={store?.propiedades[0]}/>
    </div>
  )
}

export default Alquiler
