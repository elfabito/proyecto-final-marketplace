import React from 'react';
import Link from '@mui/material/Link';
import { Breadcrumbs } from '@mui/material';
import "./Styles/Hilo.css"
import { useState } from 'react';
import { useEffect } from 'react';

export default function ActiveLastBreadcrumb(props) {
    const [hilo,setHilo]=useState([])
    const seguimientoHilos = ["MarcketPlace inmobiliario", "Alquiler", "Maldonado", "Punta Del Este", "Arquiler de monoambiente"];

    useEffect(()=>{
        if (props) {
        setHilo(props)
        }else  {
            setHilo(seguimientoHilos)
        }
    },[])
    return (
        <div className='hilo' role="presentation">
            <div>

          
            <span className='ti'>Estás en:ㅤ</span>
            </div>
            <div>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                {hilo.map((item, index) => (
                    <Link key={index} style={linkStyle} underline="hover" color="inherit" href="/">
                    <span>{item}</span>
                    </Link>
                ))}
            </Breadcrumbs>
            </div>
        </div>
    );
}

const linkStyle = {
    display: 'flex',
    flexDirection: 'row',
    opacity: '0.8',
    fontSize: '13px',
};
