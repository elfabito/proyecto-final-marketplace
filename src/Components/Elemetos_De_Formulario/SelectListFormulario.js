import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";

export default function SelectTextFields(props) {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue("");
  }, [props.tipo]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
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
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
