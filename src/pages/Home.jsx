import { getTrending } from "api/allMovies";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [movies, setMovies] = useState([])
 


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
            <li key={el.id}><Link to={'/movies/'+el.id}>{el.title}</Link></li>
          )}
        </ul>
        </>
    )
}
export default Home;