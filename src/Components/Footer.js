import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));

export default function StickyFooter() {
  return (
    <Box className="footer" sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item id="footer">Sobre Nosotros</Item>
          <Item id="footer">Terminos y condiciones</Item>
        </Grid>
        <Grid item xs={6}>
          <Item id="footer">Ventas</Item>
          <Item id="footer">Alquiler</Item>
          <Item id="footer">Alquiler Temporal</Item>
        </Grid>
        <Grid item xs>
        <Item id="footer"><YouTubeIcon/></Item>
        <Item id="footer"><FacebookIcon/></Item>
        <Item id="footer"><TwitterIcon/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
