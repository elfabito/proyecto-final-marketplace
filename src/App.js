import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Outlet } from 'react-router-dom'
import Contexto from './Contexto'



function App() {
  const valorCompartido = "Este es un valor compartido";

  return (
    <Contexto.Provider value={valorCompartido}>
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </Router>
    </Contexto.Provider>
  )
}

export default App
