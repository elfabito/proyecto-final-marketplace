import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types(props) {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography
        variant={props.tipo}
        fontSize={props.tamaño}
        gutterBottom
        style={{ fontWeight: props.negrita ? 'bold' : 'normal' }}
      >
        {props.contenido}
      </Typography>
    </Box>
  );
}
