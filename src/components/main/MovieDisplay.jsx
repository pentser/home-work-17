import React from 'react'
import Rate from '../Rate';

function MovieDisplay(props) {

  const {index,movies} =props;
  return (
   <div className='flex flex-col'>
     <img className='w-30 float-left' src={movies[index].image} alt={movies[index].name} />
     <h3 className='text-[1em] text-blue-500'>{movies[index].name}</h3>
     <p className='text-info'>{movies[index].desc}</p>
     {/* <span>rating: {movie[index].rating}</span>
     <Rate rate={movie[index].rating}></Rate> */}

   </div>
  )
}

export default MovieDisplay