import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "../PublicarForm.css"
import { useState } from 'react';
import { useEffect } from 'react';


export default function SelectTextFields(props) {
    const [tipoDeLista,setTipoDeLista]=useState([])
    useEffect(()=>{
    setTipoDeLista(props.tipo)
    },[])
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
        
          select
          defaultValue=""
          id="standard-basic" 
          label={props.titulo} 
          variant="standard"

        >
          {tipoDeLista.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}