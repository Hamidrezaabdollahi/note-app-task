import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Notes from './pages/Notes'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/notes' element={<Notes />} />
    <Route path='/about' element={<About />} />
   </Routes>
   </>
  )
}

export default App
