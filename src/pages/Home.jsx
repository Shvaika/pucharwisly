import { getTrending } from "api/allMovies";
import MoviesList from "components/MoviesList/MovieList";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const Home = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
 
const location = useLocation()

  const getMovies = useCallback(async () => {
    try {
      const response = await getTrending()
      setMovies(response.results)
      
    } catch (error) {
      setError(error)
     
    } finally {
     setIsLoading(false)
    }
  }, [])

  useEffect(() => {
      getMovies()
  }, [getMovies])
  
    return (
      <>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something went wrong...</p>}
       
        {movies.length > 0 && <MoviesList movies={movies} location={location} />}
        </>
    )
}
export default Home;