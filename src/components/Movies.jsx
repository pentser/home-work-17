import React from 'react'
import { useContext } from "react"
import {MoviesContext} from "../contexts/MoviesContextProvider"

import Movie from "../components/Movie";


function Movies(props) {

    const {limit} = props;

   
    const {movies} = useContext(MoviesContext)
    console.log(movies)

  return (
    <>
    <div className='flex gap-5'>
    
        {movies.map((movie,inx)=>{
             if(inx<limit) {
              return (
                <div className='flex flex-col'>
                    <Movie key={inx} movie={movie}/>
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