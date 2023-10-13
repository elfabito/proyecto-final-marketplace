import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./PublicarForm.css"
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

// https://www.bezkoder.com/react-image-upload-preview/


export default function FormPropsTextFields() {
  return (
    <div className="publicarFormContainer">
    <Typography mb="1rem" variant="h4" fontFamily="Lato">
      Publicar Propiedad
    </Typography>
    <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
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
          label="Zona" 
          variant="standard" 
        />
        <TextField 
          id="standard-basic" 
          label="Estado" 
          variant="standard" 
        />
        <TextField 
          id="standard-basic" 
          label="Disposicion" 
          variant="standard" 
        />
        <TextField 
        id="standard-basic" 
        label="M² edificados" 
        variant="standard" 
        />
        <TextField 
        id="standard-basic" 
        label="M² del terreno" 
        variant="standard" 
        />
        <TextField
          id="standard-number"
          label="Piso"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Cantidad de Pisos"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        {/* <TextField
          required
          id="standard-required"
          label="Required"
          variant="standard"
        /> */}
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
        <TextField
          id="standard-number"
          label="Año de Construccion"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Garages"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <FormControl  sx={{ m: 1, width: '20ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Gastos Comunes</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <TextField 
        id="standard-basic" 
        label="Acepta Mascotas" 
        variant="standard" 
        />              
      </div>
    </Box>
    <TextField
          id="standard-multiline-static"
          label="Descripcion"
          multiline
          rows={6}
          variant="standard"
          sx={{width: "60%"}}
        />
    </div>
  );
}