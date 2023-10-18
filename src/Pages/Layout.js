import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )
}

export default Layout
