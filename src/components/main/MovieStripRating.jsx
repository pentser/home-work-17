import React,{useState} from 'react'
import { useContext,useEffect } from "react"
import {MoviesContext} from "../../contexts/MoviesContextProvider"
import MovieDisplay from './MovieDisplay'
import Aside from '../Aside'




function MovieStripRating(props) {

      const {movies,getRandomMovies} = useContext(MoviesContext)
      const {limit} = props;
    

       useEffect(()=>{
      
        getRandomMovies();
              
         },[]);
         let numberOfMovies=3; 
         

         
         function handleClick(movies,index) {
          
             movies.map((movie,inx)=>{
              if(inx===index) {
                 
                  alert(JSON.stringify(movie))
              }

             })
           
         }

  return (

    <div className='grid grid-cols-2 gap-2'>
      <div className='flex gap-5 justify-center items-end'>
    
        {movies.map((movie,inx)=>{
             if(inx<limit) {
              return (
                
                    <>  
                        
                    <div key={inx} className='flex flex-row w-50 mt-5 s'></div>
                    <MovieDisplay movies={movies} index={inx}/>
                    <div className='text-2xl text-blue-600 hover:text-blue-400' onClick={()=>{handleClick(movies,inx)}}>{inx+1} </div>
                     </>
              )
            
             }
             return null;    

        })}
    </div>
    <Aside limit={numberOfMovies+2}></Aside>
  </div>
  )
}

export default MovieStripRating