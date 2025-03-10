import React from 'react'
import { useContext } from "react"
import {MoviesContext} from "../contexts/MoviesContextProvider"

import Movie from "../components/Movie";


function Movies(props) {

    const {movies,limit} = props;

   // const {movies,setMovies,alterMovies} = useContext(MoviesContext)
  return (
    <>
    <div>
        {movies.forEach((movie,inx)=>{
            inx<limit && <Movie key={inx} movie={movie}/>
        })}
    </div>

  </>
  )
}

export default Movies