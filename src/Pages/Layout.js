import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import StoreProvider from "../Store/StoreProvider";

const Layout = () => {
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
