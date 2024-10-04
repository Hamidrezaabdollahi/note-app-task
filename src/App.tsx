import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'

import About from './pages/About'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import AddNote from './components/AddNote'
import NotesList from './components/NotesList'
import { Toaster } from 'react-hot-toast'
import { NoteProvider } from './context/context'

function App() {
  return (
    <NoteProvider>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Layout />} >
          <Route index element={<Navigate to="add" />} />
          <Route path='add' element={<AddNote />} />
          <Route path='notes-list' element={<NotesList />} />
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </NoteProvider>
  )
}

export default App
