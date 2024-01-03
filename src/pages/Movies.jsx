import { getSearchMovie } from "api/allMovies"
import MoviesList from "components/MoviesList/MovieList"
import { SearchMovie } from "components/SearchMovie/SearchMovie"
import React, { useCallback, useEffect, useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"


const Movies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [searchParams] = useSearchParams()
  const location = useLocation()
  
  const getMovie = useCallback(async (query) => {
    try {
      const { results } = await getSearchMovie(query)
  setMovies(results)
      
    } catch (error) {
      setError(error)
     
    } finally {
    setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const searchQuery = searchParams.get('search')
    if (searchQuery) getMovie(searchQuery)
  }, [getMovie, searchParams])
  

    return (
      <>
          {isLoading && <p>Loading...</p>}
        {error && <p>Something went wrong...</p>}
        <SearchMovie/>
      
        {movies.length > 0 && <MoviesList movies= {movies} location={location}/>}
        </>
    )
}
export default Movies