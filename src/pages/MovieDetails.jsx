import { getMovieDetails } from "api/allMovies";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import css from './MovieDetails.module.css'



const MovieDetails = () => {
     const [moviesInfo, setMoviesInfo] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const { movieId } = useParams()

     const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    const getDetails = useCallback(async (id) => {
        try {
            const response = await getMovieDetails(id)
            setMoviesInfo(response)
           
         } catch (error) {
            setError(error)
     
        } finally {
            setIsLoading(false)
        }
    }, [])
    
    useEffect(() => {
        movieId && getDetails(movieId)
    }, [movieId, getDetails])

    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');


    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something went wrong...</p>}
            {moviesInfo && <div>
            
                <Link to={backLink.current}>
                    <button >go back</button>
                </Link>

                <div className={css.movieDetails}>
                    <img src={moviesInfo.poster_path ? `https://image.tmdb.org/t/p/w500/${moviesInfo.poster_path}` : defaultImg}
                        width={250}
                        alt="poster"
                    />
                    <div>
            
                        <h1>{moviesInfo.original_title}</h1>
                        <p>User Score: {Math.round(moviesInfo.vote_average * 10)}%</p>
                        <h2>Overview</h2>
                        <p>{moviesInfo.overview}</p>
                        <h3>Genres</h3>
                        <p>{moviesInfo.genres.map((el) => <span key={el.id}>{el.name} </span>)}</p>
                    </div>
                </div>
                
                <p>Additional information</p>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                <br />
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                <br />
                <Outlet />
              
            </div>}
      
        </>
    )
}
export default MovieDetails;