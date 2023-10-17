import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alquiler from "./pages/Alquiler";
import Configuracion from "./pages/Configuracion";
import Favoritos from "./pages/Favoritos";
import Ingresar from "./pages/Ingresar";
import Inmobiliarias from "./pages/Inmobiliarias";
import Logout from "./pages/Logout";
import Noticias from "./pages/Noticias";
import Perfil from "./pages/Perfil";
import Proyectos from "./pages/Proyectos";
import Venta from "./pages/Venta";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CustomDashboard from "./componentes/dashboard/CustomDashboard";
import Propiedades from "./componentes/dashboard/Propiedades";
import Ajustes from "./componentes/dashboard/Ajustes";
import Mensajes from "./componentes/dashboard/Mensajes";
import Panel from "./componentes/dashboard/Panel";
import Estadisticas from "./componentes/dashboard/Estadisticas";
import PerfilDashboard from "./componentes/dashboard/PerfilDashboard";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/alquiler" element={<Alquiler />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="/inmobiliarias" element={<Inmobiliarias />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/venta" element={<Venta />} />
          <Route path="*" element={<NoPage />} />

          <Route path="/dashboard" element={<CustomDashboard />} />
          <Route path="/dashboard/mensajes" element={<Mensajes />}></Route>
          <Route
            path="/dashboard/propiedades"
            element={<Propiedades />}
          ></Route>
          <Route path="/dashboard/ajustes" element={<Ajustes />}></Route>
          <Route path="/dashboard/panel" element={<Panel />}></Route>
          <Route
            path="/dashboard/estadisticas"
            element={<Estadisticas />}
          ></Route>
          <Route path="/dashboard/perfil" element={<PerfilDashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
