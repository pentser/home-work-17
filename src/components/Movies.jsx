import React from 'react'
import { useContext } from "react"
import {MoviesContext} from "../contexts/MoviesContextProvider"

import Movie from "../components/Movie";



function Movies(props) {

    const {limit} = props;

   
    const {movies} = useContext(MoviesContext)

  return (
    <>
    <div className='flex gap-5 justify-center'>
    
        {movies.map((movie, inx) => {
            if (inx < limit) {
                return (
                    <div key={inx} className='flex flex-col'>
                        <Movie movie={movie} />
                    </div>
                )
            }
            return null;
        })}
    </div>
  </>
  )
}

export default Movies