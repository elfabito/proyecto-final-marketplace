import "./App.css";
import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router, Outlet } from 'react-router-dom';

import DetallePropiedad from "./feature_propertyDetails/IndexDetallesPropiedad";

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <div className="content">
        <Outlet />
      </div>
      <DetallePropiedad/>
    </div>
    
    </Router>
  );
}

export default App;