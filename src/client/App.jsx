import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './style.css';
import { createTheme } from '@mui/material'

function App() {

  return (
    <>
    <div className="App">
    <NavBar />
    <Routes>
      <Route path= '/' element={<Home />} />
      <Route path= '/portfolio' element={<Portfolio />} />
      <Route path= '/contact' element={<Contact />} /> 
    </Routes>
    </div>
    </>
  )
}

export default App
