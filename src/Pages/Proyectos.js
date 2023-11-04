import React, { useContext } from "react";
import { storeContext } from "../Store/StoreProvider";

const Proyectos = () => {
  const [store, dispatch] = useContext(storeContext);
  console.log("store", store);
  return <div>Proyectos</div>;
};

export default Proyectos;
