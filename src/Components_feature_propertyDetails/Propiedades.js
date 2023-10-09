import React from 'react';
import '../Styles/Propiedad.css';

const Propiedades = () => {
    const propertyDetails = [
        { label: 'Referencia', value: 'CD784F' },
        { label: 'Tipo de Propiedad', value: 'Casa' },
        { label: 'Zona', value: 'Malvín' },
        { label: 'Estado', value: 'Buen estado' },
        { label: 'Disposición', value: 'Al frente' },
        { label: 'Baños', value: '3' },
        { label: 'M² edificados', value: '188 m2' },
        { label: 'M² de terraza', value: 'No aplica' },
        { label: 'M² del terreno', value: '288 m2' },
        { label: 'Año de Construcción', value: '2005' },
        { label: 'Dormitorios', value: '4' },
        { label: 'Garajes', value: '2' },
        { label: 'Plantas', value: '1' },
        { label: 'Sobre', value: 'No aplica' },
    ];

    const halfwayIndex = Math.ceil(propertyDetails.length / 2); // Índice a la mitad del array

    // Divide el array en dos partes
    const firstHalf = propertyDetails.slice(0, halfwayIndex);
    const secondHalf = propertyDetails.slice(halfwayIndex);

    return (
        <div>
            <h4 className='titulo'>Detalles de la Propiedad </h4>
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
