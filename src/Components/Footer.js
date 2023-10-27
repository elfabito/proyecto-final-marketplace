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
          <Item id="footer"><a href="#">Sobre Nosotros</a></Item>
          <Item id="footer"><a href="#">Terminos y condiciones</a></Item>
        </Grid>
        <Grid item xs={6}>
          <Item id="footer"><a href="#">Ventas</a></Item>
          <Item id="footer"><a href="#">Alquiler</a></Item>
          <Item id="footer"><a href="#">Alquiler Temporal</a></Item>
        </Grid>
        <Grid item xs>
        <Item id="footer"><YouTubeIcon/><a href="#">YouTube</a></Item>
        <Item id="footer"><FacebookIcon/><a href="#">Facebook</a></Item>
        <Item id="footer"><TwitterIcon/><a href="#">Twitter</a></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
