
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
      "name": "Justice League",
      "description": "Four tales unfold in the Eternal City: While vacationing in Rome, architect John encounters a young man whose romantic woes remind him of a painful incident from his own youth;",
      "rating": 4,
      "image": "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg"          
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
      "name": "Green Lantern",
      "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ",
      "rating": 2,
      "image": "https://image.tmdb.org/t/p/w500/fj21HwUprqjjwTdkKC1XZurRSpV.jpg"          
  },
  {
      "id": 6,
      "name": "The Dark Knight",
      "description": "Batman raises the stakes in his war on crime. With the help of Lt",
      "rating": 1,
      "image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"          
  }
  

]

export const MoviesContext = createContext({ movies: initial_movies, setMovies: () => {} ,alterMovies: (movie)=>{},sortMoviesByRating: ()=>{},getRandomMovies:(numberOfMovies)=>{}});


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

function sortMoviesByRating() {
  const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
  setMovies(sortedMovies);
}

function getRandomMovies(numberOfMovies) {
  const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
  return shuffledMovies.slice(0, numberOfMovies);
}

const value= {
  movies,
  setMovies,
  alterMovies,
  sortMoviesByRating,
  getRandomMovies
}

  
  return (
   <MoviesContext.Provider value={value}>
     {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContextProvider;



