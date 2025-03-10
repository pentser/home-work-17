import React from 'react'

function Movie(props) {

  const {img,name,desc} =props.movie;
  retrn (
   <>
     <img className='w-50' src={img} alt="Iron Man image" />
     <h3 className='text-2xl text-blue-500'>{name}</h3>
     <p className='text-info'>{desc}</p>
     <span>rating: {rating}</span>

   </>
  )
}

export default Movie