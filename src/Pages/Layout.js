import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import StoreProvider from "../Store/StoreProvider";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <StoreProvider>
        <Navbar />

        <Outlet />
      </StoreProvider>
    </>
  );
};

export default Layout;
