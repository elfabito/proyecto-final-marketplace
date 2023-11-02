import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import StoreProvider from '../Store/StoreProvider'

const Layout = () => {
  
  const showNavBar = window.location.href.includes('dashboard')
  return (
    <>
    <StoreProvider>
      {!showNavBar && <Navbar />}

      <Outlet />
    </StoreProvider>
    </>
  )
}

export default Layout
