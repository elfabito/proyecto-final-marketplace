import { Outlet } from "react-router-dom";
import Navbar from "../componentes/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )
};

export default Layout;