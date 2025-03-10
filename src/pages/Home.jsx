
import { useContext } from "react"
import {MoviesContext} from "../contexts/MoviesContextProvider"
import Movies from "../components/Movies";

 
 function Home() {
     const {sortMoviesByRating} = useContext(MoviesContext)
     
     {sortMoviesByRating()}
     let numberOfMovies=5;
      return (
        <>
          <Movies movies={movies} limit={numberOfMovies}></Movies>
        </>
          
      );

    }
    export default Home;

