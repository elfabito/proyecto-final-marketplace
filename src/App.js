import * as React from 'react';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import "./App.css";

function App() {
  const [alignment, setAlignment] = React.useState('venta');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Search">
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              id='opciones'
            >
              <ToggleButton value="venta">Venta</ToggleButton>
              <ToggleButton value="alquiler">Alquiler</ToggleButton>
              <ToggleButton value="alquilertemporal">Alquiler Temporal</ToggleButton>
            </ToggleButtonGroup>
            <TextField id="search" label="Localidad" variant="outlined" />
          </Box>
        </div>
      </header>
    </div>
  );
}

export default App;
