import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Outlet } from 'react-router-dom'



function App() {
  return (
    <Router>
<<<<<<< HEAD
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />
      </div> 
    </div>
=======
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Outlet />
        </div>
      </div>
>>>>>>> a4ae650ed21a8e0b3fa23e4c8a34767f24519d81
    </Router>
  )
}

export default App
