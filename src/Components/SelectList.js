import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useEffect } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const options_default = [
  "Casa",
  "Apartamento",
  "Terreno",
  "Local Comercial",
  "Oficina",
  "Chacra o Campo",
  "Garage o Cochera",
];

function getStyles(option, optionName, theme) {
  return {
    fontWeight:
      optionName.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CustomSelectList(props) {
  const theme = useTheme();
  const [optionName, setOptionName] = React.useState([]);
  const [options, setOptions] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOptionName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  useEffect(() => {
    if (props.options) {
      setOptions(props.options);
    } else {
      setOptions(options_default);
    }
  }, []);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Selección</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={optionName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Selección" />}
          renderValue={(selected) => (
            console.log(selected),
            console.log(selected.length),
            (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )
          )}
          MenuProps={MenuProps}
        >
          {props.options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, optionName, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
