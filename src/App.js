import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Outlet } from 'react-router-dom'
import { Context } from "./Context"



function App() {

  return (
    
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </Router>
    
  )
}

export default App
