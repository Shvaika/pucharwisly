import { getCastMovie } from "api/allMovies"
import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Cast = () => {
    const [cast, setCast] = useState([])

    const { movieId } = useParams()
    
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    const getCast = useCallback(async (id) => {
    try {
        const response = await getCastMovie(id)
     
        setCast(response.cast)
    } catch (error) {
      console.log(error)
     
    } finally {
    
    }
    }, [])

    useEffect(() => {
      getCast(movieId)
    }, [getCast, movieId])
    
    return (
        <div>
            <ul>
                {cast.map(({ name, profile_path, id }) =>
                    <li key={id}>
                        <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : defaultImg}
                            width={100}
                            alt="poster" />
                        {name}
                    </li>)}
                    
            </ul>
        </div>
        
    )
}
export default Cast