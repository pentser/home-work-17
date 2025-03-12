import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  function handleClickHome() {



  }

  return (
    <div className="flex justify-center mx-5 mb-10">
    
      <Link to="/" className='bg-cyan-700 text-white mx-5 border-0 rounded-xl p-2 hover:bg-cyan-600'>Home</Link>
      <Link to="/search" className='bg-cyan-700 text-white mx-5 border-0 rounded-xl p-2 hover:bg-cyan-600'>Search</Link>
      <Link to="/delete" className='bg-cyan-700 text-white mx-5 border-0 rounded-xl p-2 hover:bg-cyan-600'>Delete</Link>
      <Link to="/add" className='bg-cyan-700 text-white mx-5 border-0 rounded-xl p-2 hover:bg-cyan-600'>Add</Link>

    </div>
  )
 }

export default Navbar