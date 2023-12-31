import { getMovieDetails } from "api/allMovies";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";



const MovieDetails = () => {
    const [posterPath, setPosterPath] = useState('')
    const [originalTitle, setOriginalTitle] = useState('')
    const [voteAverage, setVoteAverage] = useState('')
    const [overview, setOverview] = useState('')
    const [genres, setGeneres] = useState('')
    
    const { movieId } = useParams()

    const location = useLocation()
    const navigate = useNavigate()
    const getDetails = useCallback(async () => {
        try {
            const response = await getMovieDetails(movieId)
            console.log(response)
            setPosterPath(response.poster_path)
            setOriginalTitle(response.original_title)
            setVoteAverage(response.vote_average)
            setOverview(response.overview)
            // setGeneres(response.genres)

        

      
        } catch (error) {
            console.log(error)
     
        } finally {
    
        }
    }, [])
    
    useEffect(() => {
        movieId&& getDetails()
    }, [movieId])

    const handleBack = () => {
    navigate(location.state ?? '/')
    }

    return (
        <>
            <div>
                <button onClick={handleBack}>go back</button>
                
                <img src={posterPath} alt="" />
                <h1>{originalTitle}</h1>
                <p>{voteAverage}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
              
          </div>
        </>  
    )
}
export default MovieDetails;