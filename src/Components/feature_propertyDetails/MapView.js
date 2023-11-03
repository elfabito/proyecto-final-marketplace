import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Styles/Map.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
import data from "./Database/data.json";
let iconUbicacion = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
});
const MapView = () => {
  const [ubicacion, setUbicacion] = useState([]);

  const construirUbicacion = () => {
    if (data && data.features) {
      let arreglo = [];
      data.features.forEach((value, key) => {
        arreglo.push(
          <Marker
            key={key}
            position={[
              value.geometry.coordinates[0],
              value.geometry.coordinates[1],
            ]}
            icon={iconUbicacion}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        );
      });
      setUbicacion(arreglo);
    }
  };

  useEffect(() => {
    construirUbicacion();
  }, [data]);

  return (
    <div>
      <div>
        <h2>ubicacion</h2>
        <span>Aca va la direccion</span>
      </div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className="Map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        ^{ubicacion}
      </MapContainer>
    </div>
  );
};

export default MapView;
