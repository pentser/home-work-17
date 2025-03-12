import React from 'react'
import { MoviesContext } from '../../contexts/MoviesContextProvider';


function Main() {
  const {sortMoviesByRating} = useContext(MoviesContext)  

   useEffect(()=>{

    sortMoviesByRating();
        
   },[]);
     let numberOfMovies=5; 
      return (
        <>
          <Movies limit={numberOfMovies}></Movies>
        </>
          
      );
}

export default Main