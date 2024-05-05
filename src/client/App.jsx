import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './style.css';

function App() {
  // const theme = createTheme({
  //   palette: {
  //     background: {
  //       paper: '#d9d9d9',
  //     },
  //     text: {
  //       primary: '#181818',
  //       secondary: '#0c3720',
  //     },
  //     action: {
  //       active: '#001E3C',
  //     },
  //     success: {
  //       dark: '#009688',
  //     }
  //   },
  // });
  

  return (
    <>
    <div className="App">
    <NavBar />
    <Routes>
      <Route path= '/' element={<Home />} />
      {/* <Route path= '/portfolio' element={<Portfolio />} />
      <Route path= '/contact' element={<Contact />} /> */}
    </Routes>
    </div>
    </>
  )
}

export default App
