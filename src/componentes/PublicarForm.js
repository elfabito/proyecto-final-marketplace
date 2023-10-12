import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./PublicarForm.css"
import { Typography } from '@mui/material';

export default function FormPropsTextFields() {
  return (
    <div className="publicarFormContainer">
    <Typography mb="1rem" variant="h4" fontFamily="Lato">
      Publicar Propiedad
    </Typography>
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
          id="standard-basic" 
          label="Tipo de Propiedad" 
          variant="standard" 
        />
        <TextField 
        
        id="standard-basic" 
        label="M²" 
        variant="standard" 
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Dormitorios"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Baños"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />              
      </div>
    </Box>
    </div>
  );
}