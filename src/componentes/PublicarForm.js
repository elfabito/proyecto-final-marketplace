import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./PublicarForm.css"
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SelectList from './Elemetos_De_Formulario/SelectListFormulario';

// https://www.bezkoder.com/react-image-upload-preview/

const tipoDePubicacion = [
  {
    value: 'Aquiler',
    label: 'Aquiler',
  },
  {
    value: 'Venta',
    label: 'Venta',
  },
  {
    value: 'VentaTemporal',
    label: 'Venta Temporal',
  },
 
];
const tipoDePropiedad =[{
    value: 'Casa',
    label: 'casa',
  },
  {
    value: 'Apartamento',
    label: 'Apartamento',
  },
  {
    value: 'Terreno',
    label: 'Terreno',

  },{
    value: 'Local Comercial',
    label: 'Local Comercial',
    
  },{
    value: 'Oficina',
    label: 'Oficina',
    
  },
  {
    value: 'Chacra o Campo',
    label: 'Chacra o Campo',
    
  },{
    value: 'Garage o Chochera',
    label: 'Garage o Chochera',
    
  },{
    value: 'Negocio Especial',
    label: 'Negocio Especial',
    
  },{
    value: 'Edificio',
    label: 'Edificio',
    
  },{
    value: 'Hotel',
    label: 'Hotel',
    
  },{
    value: 'Local Industrial o Garpon',
    label: 'Local Industrial o Garpon',
    
  },{
    value: 'Otro',
    label: 'Otro',
    
  },]
export default function FormPropsTextFields() {
 
  const campos = ["Zona", "Estado", "Disposicion", "M² edificados", "M² del terreno"]
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
          <SelectList tipo={tipoDePubicacion} titulo={"Tipo De Publicacion"}
          /><SelectList tipo={tipoDePropiedad} titulo={"Tipo De Propiedad"}
          />
          {campos.map((item, index) => (
            <TextField id="standard-basic" key={index}
              label={item}
              variant="standard" >
            </TextField>))}




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
          < TextField
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
          <FormControl sx={{ m: 1, width: '20ch' }} variant="standard">
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
        sx={{ width: "60%" }}
      />
    </div>
  );
}