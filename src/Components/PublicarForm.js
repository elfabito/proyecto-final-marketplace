import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./PublicarForm.css"
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SelectList from './Elemetos_De_Formulario/SelectListFormulario';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

const tipoDePropiedad = [
  {
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
  },
  {
    value: 'Local Comercial',
    label: 'Local Comercial',
  },
  {
    value: 'Oficina',
    label: 'Oficina',
  },
  {
    value: 'Chacra o Campo',
    label: 'Chacra o Campo',
  },
  {
    value: 'Garage o Chochera',
    label: 'Garage o Chochera',
  },
  {
    value: 'Negocio Especial',
    label: 'Negocio Especial',
  },
  {
    value: 'Edificio',
    label: 'Edificio',
  },
  {
    value: 'Hotel',
    label: 'Hotel',
  },
  {
    value: 'Local Industrial o Garpon',
    label: 'Local Industrial o Garpon',
  },
  {
    value: 'Otro',
    label: 'Otro',
  },
];

export default function FormPropsTextFields() {
  const [formData, setFormData] = useState({
    tipoPublicacion: "", // Campo para el tipo de publicación
    tipoPropiedad: "",  // Campo para el tipo de propiedad
  });

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSelectChange = (value, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSave = () => {
    console.log(formData);
  };

  const camposTexto = ["Nombre", "Zona", "Ubicacion", "Estado", "Disposicion", "M² edificados", "M² del terreno", "Imagen 1", "Imagen 2", "Imagen 3"];
  const camposNumero = ["Piso", "Cantidad de Pisos", "Dormitorios", "Baños", "Garages", "Año de Construccion"];

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
          <SelectList
            tipo={tipoDePubicacion}
            titulo={"Tipo De Publicacion"}
            onChange={(value) => handleSelectChange(value, "tipoPublicacion")}
          />
          <SelectList
            tipo={tipoDePropiedad}
            titulo={"Tipo De Propiedad"}
            onChange={(value) => handleSelectChange(value, "tipoPropiedad")}
          />
          {camposTexto.map((item, index) => (
            <TextField
              id={item}
              key={index}
              label={item}
              variant="standard"
              onChange={(e) => handleInputChange(e, item)}
            />
          ))}
          {camposNumero.map((item, index) => (
            <TextField
              id={item}
              key={index}
              label={item}
              type="number"
              variant="standard"
              onChange={(e) => handleInputChange(e, item)}
            />
          ))}
          <FormControl sx={{ m: 1, width: '20ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Gastos Comunes</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              onChange={(e) => handleInputChange(e, "Gastos Comunes")}
            />
          </FormControl>
          <TextField
            id="standard-basic"
            label="Acepta Mascotas"
            variant="standard"
            onChange={(e) => handleInputChange(e, "Acepta Mascotas")}
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
        onChange={(e) => handleInputChange(e, "Descripcion")}
      />
      <Button variant="contained" onClick={handleSave} color="success">
        Guardar
      </Button>
    </div>
  );
}
