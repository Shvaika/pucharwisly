import { useParams } from "react-router-dom"
import React, { useCallback, useEffect, useState } from "react"
import { getReviews } from "api/allMovies"



const Reviews = () => {
const [reviews, setReviews] = useState([])

    const { movieId } = useParams()
    const getReviewsMovie = useCallback(async (id) => {
        try {
            const response = await getReviews(id) 
             setReviews(response.results)
        }catch (error) {
      console.log(error)
     
    } finally {
    
    }
    }, [])

    useEffect(() => {
     getReviewsMovie(movieId)
    }, [getReviewsMovie, movieId])
    
    return (
        <>
            <ul>
                {reviews.length>0 ? reviews.map(({ author, content, id }) => <li key={id}><h3>{author}</h3>
                    {content}</li>) : 'We don\'t have any reviews for this movie'}
            </ul>
        </>
    )
}
export default Reviews

