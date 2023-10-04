import "./App.css"
import Dato from "./Database/Data.js"
import Breadcrumb from "./Components/Breadcrumbs";
import { useEffect, useState } from "react";
import IconDetalle from "./Components/IconDetalle";
import MapView from "./Components/MapView";
function App() {
  const [casa, setCasa] = useState([]);
  
  useEffect(() => {
    setCasa(Dato[0])
  }, [])
  return (
    <div className="App">
      <header className="main">
        <Breadcrumb />

        <div className="DetallePropiedadImagen">
          {Array.isArray(casa.imgsrc) ? (
            <div>
              {casa.imgsrc.map((item, index) => (
                <img

                  src={item}
                  alt={`Imagen ${index}`}
                  className="image-size"
                />
              ))}
            </div>
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <div className="carta">
          <h3>{casa.title}</h3>
          <p>{casa.tipoMoneda} {casa.precio}</p>
          <p>Precio de {casa.tipoVenta}</p>
          <IconDetalle bano={casa.banos} dormitorio={casa.dormitorio} m2Terreno={casa.m2Terreno} />
          <MapView  />
        </div>
      </header>
    </div>
  );
}
export default App