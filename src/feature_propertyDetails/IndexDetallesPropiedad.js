import Dato from "./Database/Data.js"
import Breadcrumb from "./Breadcrumbs.js";
import { useEffect, useState } from "react";
import IconDetalle from "./IconDetalle.js";
import MapView from "./MapView.js";
import "./Styles/DestalleDePropiedad.css"
import DPropiedad from "./Descripcion.js";
import Propiedades from "./Propiedades.js";
import React from 'react';
import SimpleImageCarousel from './Carousel.js';
import './Styles/imagen.css'

function DetallePropiedad() {
  const [casa, setCasa] = useState([]);

  useEffect(() => {
    setCasa(Dato[0])
  }, [])
  const images = ["https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.122103_CW139153_47.jpg", "https://cdn2.infocasas.com.uy/repo/img/th.outside1365x799.0e1565050177dd630a99b24e50721f5f9a222f7b.jpg", "https://cdn2.infocasas.com.uy/repo/img/th.outside750x811.122103_CW139153_874.jpg"]
    ;
  return (
    <div className="DetallePropiedad">
      <header className="main">
        <Breadcrumb />

        <div className="DetallePropiedadImagen">
          <SimpleImageCarousel images={images} />
        </div>
        <div className="carta">
          <h1>{casa.title}</h1>
          <p>{casa.tipoMoneda} {casa.precio}</p>
          <p>Precio de {casa.tipoVenta}</p>
          <IconDetalle bano={casa.banos} dormitorio={casa.dormitorio} m2Terreno={casa.m2Terreno} />
          <MapView />
        </div>
        <div><Propiedades /></div>

        <div><DPropiedad /></div>
      </header>
    </div>
  );
}
export default DetallePropiedad