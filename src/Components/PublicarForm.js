import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./PublicarForm.css";
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SelectList from './Elemetos_De_Formulario/SelectListFormulario';
import Button from '@mui/material/Button';
import TextFieldImagenes from './Elemetos_De_Formulario/TextFieldImagenes';

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
const tipoPrecio = [{
  value: '$',
  label: 'Pesos Uruguayo',
},
{
  value: 'u$',
  label: 'USD',
},];
const aceptaMascotasOptions = [{
  value: 'si',
  label: 'Si',
},{
  value: 'no',
  label: 'No',
},];

export default function FormPropsTextFields() {
  const [formData, setFormData] = useState({
    tipoPublicacion: '',
    tipoPropiedad: '',
    tipoPrecio: '',
    GastosComunes: '',
    Precio: '',
    aceptaMascotas: '',
  });

  const [textFieldImagenesData, setTextFieldImagenesData] = useState([]);

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
    // Combina formData y textFieldImagenesData y realiza la acción de guardado
    const combinedData = { ...formData, textFieldImagenesData };
    console.log(combinedData);
  };

  const camposTexto = ["Nombre", "Zona", "Ubicacion", "Estado", "Disposicion"];
  const camposNumero = ["Piso", "Dormitorios", "Baños", "Garages", "Año de Construccion", "M² edificados", "M² del terreno"];
  const camposMonetarios = ["Precio", "Gastos Comunes"];

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
          <div className="Select">
            <SelectList
              className="selectList"
              tipo={tipoDePubicacion}
              titulo={"Tipo De Publicacion"}
              onChange={(value) => handleSelectChange(value, "tipoPublicacion")}
            />
            <SelectList
              className="selectList"
              tipo={tipoDePropiedad}
              titulo={"Tipo De Propiedad"}
              onChange={(value) => handleSelectChange(value, "tipoPropiedad")}
            />
            <SelectList
              className="selectList"
              tipo={tipoPrecio}
              titulo={"Tipo De Precio"}
              onChange={(value) => handleSelectChange(value, "tipoPrecio")}
            />
          </div>
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
          <div>
            {camposMonetarios.map((item, index) => (
              <FormControl sx={{ m: 1, width: '20ch' }} variant="standard" key={index}>
                <InputLabel htmlFor={`standard-adornment-amount-${index}`}>{item}</InputLabel>
                <Input
                  id={`standard-adornment-amount-${index}`}
                  startAdornment={
                    <InputAdornment position="start">
                      {formData.tipoPrecio === '$' ? '$' : 'u$'}
                    </InputAdornment>
                  }
                  onChange={(e) => handleInputChange(e, item)}
                />
              </FormControl>
            ))}
          </div>
          <SelectList
            className="selectList"
            tipo={aceptaMascotasOptions}
            titulo={"Acepta Mascotas"}
            onChange={(value) => handleSelectChange(value, "aceptaMascotas")}
          />
        </div>
      </Box>
      <TextFieldImagenes
        textFieldImagenesData={textFieldImagenesData}
        setTextFieldImagenesData={setTextFieldImagenesData}
      />
      <div className='bobyboton'>
        <TextField
          id="standard-multiline"
          label="Descripcion"
          multiline
          rows={6}
          variant="standard"
          sx={{ width: "60%" }}
          onChange={(e) => handleInputChange(e, "Descripcion")}
        />
        <Button variant="contained" className='boton' onClick={handleSave} color="success">
          Guardar
        </Button>
      </div>
    </div>
  );
}
