import "./App.css"
import Dato from "./Database/Data.js"
import { useEffect, useState } from "react";
function App() {
  const [casa, setCasa] = useState("");
  useEffect(() => {
    setCasa(Dato[0])
  }, [])
  return (
    <div className="App">
      <header className="main">
        <p>Estás en: InfoCasas</p>
        <div className="DetallePropiedadImagen">
          {Array.isArray(casa.imgsrc) ? (
            <div>
              {casa.imgsrc.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`Imagen ${index}`}
                  className="image-size"
                />
              ))}
            </div>
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <div className="carta">
          <h3>{casa.title}</h3>
          <p>Precio de {casa.tipoVenta} :{casa.tipoMoneda} {casa.precio}</p>
        </div>
      </header>
    </div>
  );
}
export default App