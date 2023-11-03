import React from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import "./Styles/DestalleDePropiedad.css";

const IconDetalle = ({ bano, dormitorio, m2Terreno }) => {
  return (
    <div className="iconDetalle">
      <div className="iconTextContainer">
        <HotelIcon />
        <p>ㅤ{dormitorio} Dorm</p>
      </div>
      <div className="iconTextContainer">
        <BathtubIcon />
        <p>ㅤ{bano} Baños</p>
      </div>
      <div className="iconTextContainer">
        <SquareFootIcon />
        <p>{m2Terreno} m²</p>
      </div>
    </div>
  );
};

export default IconDetalle;
