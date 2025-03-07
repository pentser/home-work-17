
import { createContext } from 'react';

const moviesContext = createContext();


function MoviesContext({children}) {
    function addMovies(movie) {
        const index = movies.findIndex((m) => m.name === movie.name);
        if (index === -1) {
          setMovies([...movies, movie]);
        } else {
          const newMovies = [...movies];
          newMovies[index] = movie;
          setMovies(newMovies);
    }
}

    const [movies, setMovies] = useState([]);
  return (
   <moviesContext.Provider value={addMovies}>
     {children}
    </moviesContext.Provider>
  )
}

export default MoviesContext



