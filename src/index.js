import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Alquiler from './Pages/Alquiler'
import Configuracion from './Pages/Configuracion'
import Favoritos from './Pages/Favoritos'
import Ingresar from './Pages/Ingresar'
import Inmobiliarias from './Pages/Inmobiliarias'
import Logout from './Pages/Logout'
import Noticias from './Pages/Noticias'
import Perfil from './Pages/Perfil'
import Proyectos from './Pages/Proyectos'
import Venta from './Pages/Venta'
import NoPage from './Pages/NoPage'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import {
  Resumen,
  Pagos,
  Busquedas,
  Consultas,
  FavoritosPerfil,
} from './Pages/subPages/PerfilSubPages'
import PublicarPropiedad from './Pages/PublicarPropiedad'

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
