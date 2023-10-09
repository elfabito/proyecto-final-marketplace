import Dato from "../Database/Data.js"
import Breadcrumb from "./Breadcrumbs.js";
import { useEffect, useState } from "react";
import IconDetalle from "./IconDetalle.js";
import MapView from "./MapView.js";
import "../Styles/DestalleDePropiedad.css"
import DPropiedad from "./Descripcion.js";
import Propiedades from "./Propiedades.js";

function DetallePropiedad() {
    const [casa, setCasa] = useState([]);
    
    useEffect(() => {
      setCasa(Dato[0])
    }, [])
    return (
      <div className="DetallePropiedad">
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
          <div><Propiedades/></div>  

          <div><DPropiedad/></div>
        </header>
      </div>
    );
  }
  export default DetallePropiedad