import { getMovie } from "api/allMovies";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const [posterPath, setPosterPath] = useState('')
    const [originalTitle, setOriginalTitle] = useState('')
    const [voteAverage, setVoteAverage] = useState('')
    const [overview, setOverview] = useState('')
    const [genres, setGeneres] = useState('')
    
    const { movieId } = useParams()

    const getDetails = useCallback(async () => {
    try {
        const response = await getMovie(movieId)
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

    return (
        <>
            <div>
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