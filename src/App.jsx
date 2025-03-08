

import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Delete from './pages/Delete'
import Search from './pages/Search'

import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import MoviesContextProvider from './contexts/MoviesContextProvider'

function App() {


  return (
    <MoviesContextProvider>
      <header>
        <h1>Best Movies</h1>
        <Navbar />  
      </header>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/delete" element={<Delete/>} />
        <Route path="/search" element={<Search/>} />
       </Routes> 
    </MoviesContextProvider>
  )
}

export default App
