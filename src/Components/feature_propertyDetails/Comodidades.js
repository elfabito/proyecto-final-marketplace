import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function ClickableChips(props) {
  const [listadoComdidades, setListadoComdidades] = React.useState([]);

  React.useEffect(() => {
    setListadoComdidades(props.comodidades);
    console.log(props.comodidades)
    console.log("hola")
  }, [props.comodidades]);


    return (
        <Stack direction="row" spacing={1}>
          {listadoComdidades && listadoComdidades.map((item, index) => (
            <Chip key={index} label={item} />
          ))}
        </Stack>
      );
 
}
