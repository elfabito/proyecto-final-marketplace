import * as React from "react";
import Title from "./Title";
import CustomDashboard from "./CustomDashboard";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function preventDefault(event) {
  event.preventDefault();
}
export default function Mensajes() {
  return (
    <CustomDashboard>
      <Title>Mensajes</Title>

      <React.Fragment>
        <Typography component="p" variant="h4">
          Alquiler de Apartamento
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          on 15 March, 2019
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            Ver Mensaje
          </Link>
        </div>
      </React.Fragment>
    </CustomDashboard>
  );
}
