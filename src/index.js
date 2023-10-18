import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Alquiler from './pages/Alquiler'
import Configuracion from './pages/Configuracion'
import Favoritos from './pages/Favoritos'
import Ingresar from './pages/Ingresar'
import Inmobiliarias from './pages/Inmobiliarias'
import Logout from './pages/Logout'
import Noticias from './pages/Noticias'
import Perfil from './pages/Perfil'
import Proyectos from './pages/Proyectos'
import Venta from './pages/Venta'
import NoPage from './pages/NoPage'
import Layout from './pages/Layout'
import Home from './pages/Home'
import {
  Resumen,
  Pagos,
  Busquedas,
  Consultas,
  FavoritosPerfil,
} from './pages/subPages/PerfilSubPages'
import PublicarPropiedad from './pages/PublicarPropiedad'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/alquiler' element={<Alquiler />} />
          <Route path='/configuracion' element={<Configuracion />} />
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='/ingresar' element={<Ingresar />} />
          <Route path='/inmobiliarias' element={<Inmobiliarias />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/perfil' element={<Perfil />}>
            <Route index element={<Resumen />} />
            <Route path='Pagos' element={<Pagos />} />
            <Route path='Busquedas' element={<Busquedas />} />
            <Route path='Consultas' element={<Consultas />} />
            <Route path='Favoritos' element={<FavoritosPerfil />} />
          </Route>
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/publicarpropiedad' element={<PublicarPropiedad />} />
          <Route path='/venta' element={<Venta />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Router />)
