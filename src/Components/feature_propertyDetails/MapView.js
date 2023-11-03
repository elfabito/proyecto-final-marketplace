import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Styles/Map.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let iconUbicacion = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
});

const MapView = (props) => {
  const [nombre, setNombre] = useState("ubicacion");

const position = [22,111]
  useEffect(() => {
    setNombre(props.Nombre);
  }, [props.Nombre]);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="Map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={iconUbicacion}>
        <Popup>
          {nombre}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
