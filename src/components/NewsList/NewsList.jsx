import NewsItem from 'components/NewsItem/NewsItem'
import React from 'react'
import css from './NewsList.module.css'
const NewsList = ({ komunikaty }) => {
    
    return (
        <article className={css.articleContainer}>
            {komunikaty.map(el => <NewsItem key={el.id} article={el} />)}
        </article>
    )
}

export default NewsList