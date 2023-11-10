import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { filterParams } from "../Store/StoreProvider";

export default function CustomAutoComplete() {
  const [selectedDepartment, setSelectedDepartment] = React.useState(null);
  const handleDepartmentChange = (value) => {
    console.log("valor = ", value);
    const newValue = value;
    filterParams.localidad = newValue;
  };

  return (
    <Autocomplete
      disablePortal
      style={{
        backgroundColor: "white",
        width: 250,
        height: 55,

        marginTop: 8,
      }}
      id="combo-box-demo"
      options={Departamentos}
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
