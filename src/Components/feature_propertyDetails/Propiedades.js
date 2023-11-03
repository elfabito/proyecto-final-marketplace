import React from "react";
import "./Styles/Propiedad.css";

const Propiedades = (props) => {
  const datos = props?.datosDeTabla;

  const halfwayIndex = Math.ceil(datos.length / 2); // Índice a la mitad del array

  // Divide el array en dos partes
  const firstHalf = datos.slice(0, halfwayIndex);
  const secondHalf = datos.slice(halfwayIndex);

  return (
    <div>
      <h2 className="titulo">Detalles de la Propiedad </h2>
      <div className="property-container">
        <div className="property-row">
          <ul className="property-list">
            {firstHalf.map((detail, index) => (
              <li key={index}>
                <span>• {detail.label}:</span> <strong>{detail.value}</strong>
              </li>
            ))}
          </ul>
        </div>
        {secondHalf.length > 0 && (
          <div className="property-row">
            <ul className="property-list">
              {secondHalf.map((detail, index) => (
                <li key={index}>
                  <span>• {detail.label}:</span> <strong>{detail.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Propiedades;
