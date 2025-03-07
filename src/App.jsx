

import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Delete from './pages/Delete'
import Search from './pages/Search'

import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import MoviesContext from './contexts/MoviesContext'

function App() {


  return (
    <MoviesContext>
      <header>
        <h1>Best Movies</h1>
        <Navbar />  
      </header>
       <Routes>
        <Route path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/delete" component={Delete} />
        <Route path="/search" component={Search} />
       </Routes> 
    </MoviesContext>
  )
}

export default App
