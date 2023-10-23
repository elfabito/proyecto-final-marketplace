import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Brightness5RoundedIcon from "@mui/icons-material/Brightness5Rounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";

import { Link } from "react-router-dom";
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to={`/dashboard/panel`} style={{ textDecoration: "none" }}>
       Panel
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HouseRoundedIcon />
      </ListItemIcon>
      <Link to={`/dashboard/propiedades`} style={{ textDecoration: "none" }}>
        Propiedades
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TimelineRoundedIcon />
      </ListItemIcon>
      <Link to={`/dashboard/estadisticas`} style={{ textDecoration: "none" }}>
        Estadisticas
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ChatRoundedIcon />
      </ListItemIcon>

      <Link to={`/dashboard/mensajes`} style={{ textDecoration: "none" }}>
        Mensajes
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleRoundedIcon />
      </ListItemIcon>
      <Link to={`/dashboard/perfil`} style={{ textDecoration: "none" }}>
        Perfil
      </Link>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Usuario : @
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Brightness5RoundedIcon />
      </ListItemIcon>
      <Link to={`/dashboard/ajustes`} style={{ textDecoration: "none" }}>
        Ajustes
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ExitToAppRoundedIcon />
      </ListItemIcon>
      <Link to={`/home`} style={{ textDecoration: "none" }}>
        Cerrar Sesión
      </Link>
    </ListItemButton>
  </React.Fragment>
);
