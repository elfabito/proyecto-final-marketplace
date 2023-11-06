import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { filterParams } from "../Store/StoreProvider";

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

export default function CustomSelectCheckmarks(props) {
  const [optionName, setOptionName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOptionName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    filterParams.tipoDePropiedad = value;
    console.log(filterParams.tipoDePropiedad);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="checkmarks">Selección</InputLabel>
        <Select
          labelId="checkmarks"
          id="checkmarks"
          multiple
          value={optionName}
          onChange={handleChange}
          input={<OutlinedInput label="Selección" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {props.options.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={optionName.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
