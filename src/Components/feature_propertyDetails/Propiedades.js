import React, { useEffect, useState } from 'react';
import './Styles/Propiedad.css';
import Typography from "../componentesBasicos/Typography.js";

const Propiedades = (props) => {
    const [info,setinfo]=useState([])
    useEffect(() => {
        setinfo(props?.datosDeTabla)
      }, [])
    const propertyDetails = [
        { label: 'Referencia',  value:info.id},
        { label: 'Tipo de Propiedad', value: info.tipoDePropiedad },
        { label: 'Zona', value: info.zona },
        { label: 'Estado', value: info.estado },
        { label: 'Disposición', value: info.disposicion},
        { label: 'Baños', value: info.banos },
        { label: 'M² edificados', value:  info.m2Edificados},
        { label: 'M² de terraza', value: info.m2Terreno },
        { label: 'Año de Construcción', value: info. anioConstruccion },
        { label: 'Dormitorios', value: info.dormitorio },
        { label: 'Garajes', value: info.garaje },
        { label: 'Mascota', value: info.aceptaMascotasOptions},
    ];
    const halfwayIndex = Math.ceil(info.length / 2); // Índice a la mitad del array

    // Divide el array en dos partes
    const firstHalf = info.slice(0, halfwayIndex);
    const secondHalf = info.slice(halfwayIndex);
    
    return (
        <div>
            <Typography contenido={"Detalles de la Propiedad"} tipo={"h2"} negrita={false} tamaño={32} />
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
}

export default Propiedades;
