
import { createContext,useState } from 'react';


const initial_movies= [
  {
      "id": 1,
      "name": "Iron Man",
      "description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      "rating": 5,
      "image": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"          
  },
  {
      "id": 2,
      "name": "The Incredible Hulk",
      "description": "Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk",
      "rating": 4,
      "image": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"          
  },
  {
      "id": 3,
      "name": "To Rome with Love",
      "description": "Four tales unfold in the Eternal City: While vacationing in Rome, architect John encounters a young man whose romantic woes remind him of a painful incident from his own youth;",
      "rating": 4,
      "image": "https://image.tmdb.org/t/p/w500/l6kiBvruMr5qPsTyv853jIlj2pv.jpg"          
  },
  {
      "id": 4,
      "name": "The Artist",
      "description": "Hollywood, 1927: As silent movie star George Valentin wonders if the arrival of talking pictures will cause him to fade into oblivion, he sparks with Peppy Miller, a young dancer set for a big break",
      "rating": 3,
      "image": "https://image.tmdb.org/t/p/w500/z68py0ZqPgeacGPG54AGVRbNBS7.jpg"          
  },
  {
      "id": 5,
      "name": "Captain America: Civil War",
      "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ",
      "rating": 2,
      "image": "https://image.tmdb.org/t/p/w500/hOVZHM2ZEaWdytcptRhfzk0fJBv.jpg"          
  },
  {
      "id": 6,
      "name": "Madagascar 3: Europe's Most Wanted",
      "description": "Animal pals Alex, Marty, Melman, and Gloria are still trying to make it back to New York's Central Park Zoo.",
      "rating": 1,
      "image": "https://image.tmdb.org/t/p/w500/hfdds27YL5nTAhiOtjfNNxD3bJe.jpg"          
  }
  

]

export const MoviesContext = createContext({ movies: initial_movies, setMovies: () => {} ,alterMovies: (movie)=>{}});


function MoviesContextProvider({children}) {

  const [movies, setMovies] = useState(initial_movies);

    function alterMovies(movie) {
        const index = movies.findIndex((m) => m.name === movie.name);
        if (index === -1) {
          setMovies([...movies, movie]);
        } else {
          const newMovies = [...movies];
          newMovies[index] = movie;
          setMovies(newMovies);
    }
}

const value= {
  movies,
  setMovies,
  alterMovies
}

  
  return (
   <MoviesContext.Provider value={{movies,setMovies, alterMovies}}>
     {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContextProvider;



