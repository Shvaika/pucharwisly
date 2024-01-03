import React from "react"
import { Link } from "react-router-dom"

const MoviesList = ({movies, location}) => {
    return (
         <ul>
          {movies.map(el => 
            <li key={el.id}><Link to={'/movies/'+el.id} state={location}>{el.title}</Link></li>
          )}
        </ul> 
    )
}
export default MoviesList