import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alquiler from "./pages/Alquiler/Alquiler.js";
import Configuracion from "./pages/Configuracion/Configuracion.js";
import Favoritos from "./pages/Favoritos/Favoritos.js";
import Ingresar from "./pages/Ingresar/Ingresar.js";
import Inmobiliarias from "./pages/Inmobiliarias/Inmobiliarias.js";
import Logout from "./pages/Logout/Logout.js";
import Noticias from "./pages/Noticias/Noticias.js";
import Perfil from "./pages/Perfil/Perfil.js";
import Proyectos from "./pages/Proyectos/Proyectos.js";
import Venta from "./pages/Venta/venta.js";
import Index from "./pages/Index/Index.js";
import NoPage from "./pages/NoPage/NoPage.js";
import App from "./App";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="alquiler" element={<Alquiler />} />
          <Route path="configuracion" element={<Configuracion />} />
          <Route path="favoritos" element={Favoritos} />
          <Route path="ingresar" element={Ingresar} />
          <Route path="inmobiliarias" element={Inmobiliarias} />
          <Route path="logout" element={Logout} />
          <Route path="noticias" element={Noticias} />
          <Route path="perfil" element={Perfil} />
          <Route path="proyectos" element={Proyectos} />
          <Route path="/venta" element={Venta} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);