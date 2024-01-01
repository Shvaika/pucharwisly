import { getTrending } from "api/allMovies";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Home = () => {
  const [movies, setMovies] = useState([])
 
const location = useLocation()

  const getMovies = useCallback(async () => {
    try {
      const response = await getTrending()
      setMovies(response.results)
      
    } catch (error) {
      console.log(error)
     
    } finally {
    
    }
  }, [])

  useEffect(() => {
      getMovies()
  }, [getMovies])
  
    return (
      <>
        <ul>
          {movies.map(el => 
            <li key={el.id}><Link to={'/movies/'+el.id} state={location}>{el.title}</Link></li>
          )}
        </ul>
        </>
    )
}
export default Home;