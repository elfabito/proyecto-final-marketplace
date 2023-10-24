import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context';

function PruebaContext() {
    const value = useContext(Context)

    return <span>{value}</span>
}

export default PruebaContext;