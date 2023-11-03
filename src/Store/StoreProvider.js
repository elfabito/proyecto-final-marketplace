import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";
import React from "react";

const storeContext = createContext();
const intialData = initialStore();

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, intialData);
  return (
    <storeContext.Provider value={[store, dispatch]}>
      {children}
    </storeContext.Provider>
  );
};

export { storeContext };
export default StoreProvider;
