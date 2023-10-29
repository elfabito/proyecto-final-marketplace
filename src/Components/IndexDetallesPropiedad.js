import Breadcrumb from "./feature_propertyDetails/Breadcrumbs.js";
import { useEffect, useState } from "react";
import IconDetalle from "./feature_propertyDetails/IconDetalle.js";
import MapView from "./feature_propertyDetails/MapView.js";
import "../Components/feature_propertyDetails/Styles/DestalleDePropiedad.css"
import DPropiedad from "./feature_propertyDetails/Descripcion.js";
import Propiedades from "./feature_propertyDetails/Propiedades.js";
import React from 'react';
import Carrousel from "./Carrousel.js"
import Typography from "../Components/componentesBasicos/Typography.js";


function DetallePropiedad(props) {
  const [info, setinfo] = useState([]);
  const hilos = ["MarcketPlace inmobiliario", "Alquiler", "Maldonado", "Punta Del Este", "Arquiler de monoambiente"];
  useEffect(() => {
    setinfo(props?.store)
  }, [])
    ;
  return (
    <div className="DetallePropiedad">
      <header className="main">
        <Breadcrumb Seguimiento={hilos} />

        <div className="DetallePropiedadImagen">
          <Carrousel />
        </div>
        <div className="carta">
          <div className="subCarta">
            <div className="encabezado">
              <div className="tituloh1">
              <Typography contenido={info.title} tipo={"h1"} negrita={true} tamaño={32} />
              </div>
              <Typography className="Moneda" contenido={info.tipoMoneda + info.precio} tipo={"h2"} negrita={true} tamaño={32} />
            </div>
            <div className="venta">
              <Typography contenido={"Precio de" + info.tipoVenta} tipo={"h2"} negrita={false} tamaño={20} />
            </div>
            <IconDetalle bano={info.banos} dormitorio={info.dormitorio} m2Terreno={info.m2Terreno} />
          </div>

          <MapView />
        </div>
        <div><Propiedades datosDeTabla={info} /></div>

        <div className="dPropiedad"><DPropiedad texto={info} /></div>
      </header>
    </div>
  );
}
export default DetallePropiedad

