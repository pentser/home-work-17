
import { useContext ,useEffect} from "react"
import {MoviesContext} from "../contexts/MoviesContextProvider"
import Movies from "../components/Movies";

 
 function Home() {

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
    export default Home;

