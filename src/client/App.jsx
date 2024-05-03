import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
    <NavBar />
    <h1>hello hi welcome - how are you?</h1>
    {/* <Routes>
      <Route path= '/' element={<Home />} />
      <Route path= '/portfolio' element={<Portfolio />} />
      <Route path= '/contact' element={<Contact />} />
    </Routes> */}
    
    </>
  )
}

export default App
