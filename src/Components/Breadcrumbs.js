import React from 'react';
import Link from '@mui/material/Link';
import { Breadcrumbs } from '@mui/material';


export default function ActiveLastBreadcrumb() {
    const hilos = ["MarcketPlace inmobiliario", "Alquiler", "Maldonado", "Punta Del Este", "Arquiler de monoambiente"];

    return (
        <div role="presentation">
            <span>Estás en: </span>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                
                {hilos.map((item, index) => (
                    <Link underline="hover" key={index} color="inherit" href="/">
                        {item}
                    </Link>
                ))}
            </Breadcrumbs>
        </div>

    );
}
