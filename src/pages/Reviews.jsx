import { useParams } from "react-router-dom"

const { getReviews } = require("api/allMovies")
const { useCallback, useEffect, useState } = require("react")


const Reviews = () => {
const [reviews, setReviews] = useState([])

    const {movieId} = useParams()
    const getReviewsMovie = useCallback(async (id) => {
        try {
            const response = await getReviews(id) 
             setReviews(response.results)
            console.log(response)
        }catch (error) {
      console.log(error)
     
    } finally {
    
    }
    }, [])

    useEffect(() => {
     getReviewsMovie(movieId)
    }, [getReviewsMovie])
    
    return (
        <>
            <ul>
                {reviews.length>0 ? reviews.map(({ author, content }) => <li><h3>{author}</h3>
                    {content}</li>) : 'We don\'t have any reviews for this movie'}
            </ul>
        </>
    );
}
export default Reviews

