import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';

export default function SelectTextFields(props) {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // Cuando se actualizan las opciones, puedes restablecer el valor seleccionado si es necesario.
    setSelectedValue('');
  }, [props.tipo]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);

    // Puedes pasar el valor seleccionado al componente padre utilizando una función de devolución de llamada si es necesario.
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

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
          value={selectedValue}
          id="standard-basic"
          label={props.titulo}
          variant="standard"
          onChange={handleSelectChange}
        >
          {props.tipo.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
