import { Route, Routes } from 'react-router-dom'
import './App.css' // use tailwindcss
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import FortuneStick from './components/FortuneStick'
import Donate from './components/Donate'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/fortune-stick' element={<FortuneStick />}/>
        <Route path='/donate' element={<Donate />}/>
      </Routes>
    </>
  )
}

export default App
