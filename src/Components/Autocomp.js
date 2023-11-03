import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  const [selectedDepartment, setSelectedDepartment] = React.useState(null);

  const handleDepartmentChange = (value) => {
    console.log("valor = ", value);
    //setSelectedDepartment(newValue);
  };

  return (
    <Autocomplete
      style={{ backgroundColor: "white" }}
      disablePortal
      id="combo-box-demo"
      options={Departamentos}
      sx={{ width: 300 }}
      value={selectedDepartment}
      onChange={(e) => handleDepartmentChange(e.target.textContent)}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label="Departamento" />}
    />
  );
}

const Departamentos = [
  { label: "Maldonado" },
  { label: "Rivera" },
  { label: "Montevideo" },
  { label: "Durazno" },
  { label: "Tacuarembó" },
  { label: "Treinta y Tres" },
  { label: "Florida" },
  { label: "Lavalleja" },
  { label: "Paysandú" },
  { label: "Canelones" },
  { label: "San José" },
  { label: "Rio Negro" },
  { label: "Colonia" },
  { label: "Salto" },
  { label: "Artigas" },
  { label: "Rocha" },
  { label: "Soriano" },
  { label: "Cerro Largo" },
  { label: "Flores" },
];
