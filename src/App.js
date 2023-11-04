import "./App.css";
import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router, Outlet } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </Router>
  );
}

export default App;
