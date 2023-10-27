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
import dataCampos from '../Components/Elemetos_De_Formulario/dataCampos';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ChipComodides from "./Elemetos_De_Formulario/ChipComodides"

export default function PublicarForm() {
  const [formData, setFormData] = useState({
    id: 1,
    title: "",
    tipoMoneda: "",
    precio: "",
    disposicion: "",
    tipoVenta: "",
    ubicacion: [""],
    comodidades: [],
    descripcion: "",
    aceptaMascotasOptions: "",
    zona: "",
    garaje: "",
    m2Edificados: "",
    m2Terreno: "",
    tipoDePropiedad: "",
    banos: "",
    dormitorio: "",
    anioConstruccion: "",
    estado: "",
    imgsrc: [""],
  });

  const [textFieldImagenesData, setTextFieldImagenesData] = useState([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

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

  const openSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSave = () => {
    const combinedData = { ...formData, imgsrc: textFieldImagenesData.map(item => item.value) };
    console.log(combinedData);
    openSnackbar('Datos guardados');
  };

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
              tipo={dataCampos.tipoDePublicacion}
              titulo={"Tipo De Publicacion"}
              onChange={(value) => handleSelectChange(value, "tipoVenta")}
            />
            <SelectList
              className="selectList"
              tipo={dataCampos.tipoDePropiedad}
              titulo={"Tipo De Propiedad"}
              onChange={(value) => handleSelectChange(value, "tipoDePropiedad")}
            />
            <SelectList
              className="selectList"
              tipo={dataCampos.tipoPrecio}
              titulo={"Tipo De Precio"}
              onChange={(value) => handleSelectChange(value, "tipoMoneda")}
            />
            <SelectList
              className="selectList"
              tipo={dataCampos.estadosPropiedad}
              titulo={"Estados de Propiedad"}
              onChange={(value) => handleSelectChange(value, "estado")}
            />

          </div>
          {dataCampos.datosNecesario.map((item, index) => (
            <TextField
              id={item.value}
              key={index}
              type={item.type}
              label={item.label}
              variant="standard"
              onChange={(e) => handleInputChange(e, item.value)}
            />
          ))}
          <div>
            {dataCampos.camposMonetarios.map((item, index) => (
              <FormControl sx={{ m: 1, width: '20ch' }} variant="standard" key={index}>
                <InputLabel htmlFor={`standard-adornment-amount-${index}`}>{item.label}</InputLabel>
                <Input
                  id={`standard-adornment-amount-${index}`}
                  startAdornment={
                    <InputAdornment position="start">
                      {formData.tipoMoneda === '$' ? '$' : 'u$'}
                    </InputAdornment>
                  }
                  onChange={(e) => handleInputChange(e, item.value)}
                />
              </FormControl>
            ))}
          </div>
          <SelectList
            className="selectList"
            tipo={dataCampos.aceptaOptions}
            titulo={"Acepta Mascotas"}
            onChange={(value) => handleSelectChange(value, "aceptaMascotasOptions")}
          /><SelectList
          className="selectList"
          tipo={dataCampos.aceptaOptions}
          titulo={"Garage"}
          onChange={(value) => handleSelectChange(value, "garage")}
        />
        </div>

        <div>
          <Typography mb="1rem" variant="h6" fontFamily="Lato">
            Comodidades
          </Typography>
          <div><ChipComodides informacion={dataCampos.comodidadesOptions} formData={formData} /></div>
          <Typography mb="1rem" variant="h6" fontFamily="Lato">
            Imagenes
          </Typography>
          <TextFieldImagenes
            textFieldImagenesData={textFieldImagenesData}
            setTextFieldImagenesData={setTextFieldImagenesData}
          />
        </div>
        <div className='bobyboton'>
          <TextField
            id="standard-multiline"
            label="Descripcion"
            multiline
            rows={6}
            variant="standard"
            sx={{ width: "60%" }}
            onChange={(e) => handleInputChange(e, "descripcion")}
          />
          <Button variant="contained" className='boton' onClick={handleSave} color="success">
            Guardar
          </Button>
        </div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            severity="success"
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </Box>
    </div>
  );
}
