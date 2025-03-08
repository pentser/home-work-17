
import { useContext } from "react"
import {MoviesContext} from "../contexts/MoviesContextProvider"
import {AppContext} from "../contexts/AppProvider"

 
 function Home() {
     const {movies,setMovies,alterMovies} = useContext(MoviesContext)
     
      return (
         
          <div>
              The context value is: {JSON.stringify(movies)}
          </div>
      );

    }
    export default Home;

