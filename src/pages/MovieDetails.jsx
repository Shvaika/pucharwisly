import { getMovieDetails } from "api/allMovies";
import React, { useCallback, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import css from './MovieDetails.module.css'



const MovieDetails = () => {
    const [posterPath, setPosterPath] = useState('')
    const [originalTitle, setOriginalTitle] = useState('')
    const [voteAverage, setVoteAverage] = useState('')
    const [overview, setOverview] = useState('')
    const [genres, setGeneres] = useState([])
    
    const { movieId } = useParams()

    const location = useLocation()
    const navigate = useNavigate()

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    const getDetails = useCallback(async (id) => {
        try {
            const response = await getMovieDetails(id)
            setPosterPath(response.poster_path)
            setOriginalTitle(response.original_title)
            setVoteAverage(Math.round(response.vote_average*10))
            setOverview(response.overview)
            setGeneres(response.genres)

        } catch (error) {
            console.log(error)
     
        } finally {
    
        }
    }, [])
    
    useEffect(() => {
        movieId&& getDetails(movieId)
    }, [movieId, getDetails])

    const handleBack = () => {
        navigate(location.state ?? '/')
    }

    return (
        <>
            <div>
                <button onClick={handleBack}>go back</button>

                <div className={css.movieDetails}>
                    <img src={posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : defaultImg}
                        width={250}
                        alt="poster"
                    /><div>
            
                        <h1>{originalTitle}</h1>
                        <p>User Score: {voteAverage}%</p>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        <p>{genres.map((el) => <span key={el.id}>{el.name} </span>)}</p>
                    </div>
                </div>
                
                <p>Additional information</p>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                <br />
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                <br />
                <Outlet />
              
            </div>  
        </>
    )
}
export default MovieDetails;