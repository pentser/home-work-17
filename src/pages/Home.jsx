
import { useContext ,useEffect} from "react"
import {MoviesContext} from "../contexts/MoviesContextProvider"
import Movies from "../components/Movies";
import MovieStripRating from "../components/main/MovieStripRating";


 
 function Home() {

   const {sortMoviesByRating} = useContext(MoviesContext)  

   useEffect(()=>{

    sortMoviesByRating();
        
   },[]);
     let numberOfMovies=3; 
      return (
        <div>
          <Movies limit={numberOfMovies}></Movies>
          <MovieStripRating limit={numberOfMovies+2}></MovieStripRating>
        </div>
          
      );

    }
    export default Home;

