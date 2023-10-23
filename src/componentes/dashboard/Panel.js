import * as React from "react";
import CustomDashboard from "./CustomDashboard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Panel() {
  return (
    <CustomDashboard>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            {/* <Estadisticas /> */}
          </Paper>
        </Grid>
        {/* Recent ** */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
            //   <Ajustes/>
          ></Paper>
        </Grid>
        {/* Recent ** */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            {/* <Mensajes /> */}
          </Paper>
        </Grid>
      </Grid>
    </CustomDashboard>
  );
}
