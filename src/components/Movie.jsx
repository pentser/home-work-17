import React from 'react'
import Rate from './Rate';

function Movie(props) {

  const {image,name,desc,rating} =props.movie;
  return (
   <>
     <img className='w-30 float-left' src={image} alt={name} />
     <h3 className='text-[1em] text-blue-500'>{name}</h3>
     <p className='text-info'>{desc}</p>
     <span>rating: {rating}</span>
     <Rate rate={rating}></Rate>

   </>
  )
}

export default Movie