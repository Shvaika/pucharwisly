import { getSearchMovie } from "api/allMovies"
import { SearchMovie } from "components/SearchMovie/SearchMovie"
import React, { useCallback, useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"


const Movies = () => {
  const [movies, setMovies] = useState([])
  const [searchParams] = useSearchParams()
  const location = useLocation()
  
  const getMovie = useCallback(async (query) => {
    try {
      const { results } = await getSearchMovie(query)
  setMovies(results)
      console.log(results)
      
    } catch (error) {
      console.log(error)
     
    } finally {
    
    }
  }, [])

  useEffect(() => {
    const searchQuery = searchParams.get('search')
    if (searchQuery) getMovie(searchQuery)
  }, [getMovie, searchParams])
  

    return (
        <>
        <SearchMovie/>
        <ul>
          {movies.map(el => <li key={el.id}><Link to={'/movies/' + el.id} state={location}>{el.title}</Link></li>)}
        </ul>
        </>
    )
}
export default Movies