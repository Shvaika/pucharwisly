import React from 'react'
import css from './NewsItem.module.css'
import { Link } from 'react-router-dom'
import { extractDate } from './date'

const NewsItem = ({ article, location }) => {
  const imageSrc = article.articleImg?.url ? article.articleImg.url : 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ2i0cFr-RgR4-Gp-9wKW0MWhTne_MQDdnL-jwdJYBtpRT32lLxkzvyh2e4gCdCcSz9SfPtxqnDD6kJoiTdv4arrkfJFzu3vopPtcIXdNY'
  const page = article.page === 'Teren' ? '/teren' : '/aktualnosci/' + article.id
  const src = article.id === 'clrds6uk6if5d0but4mf0j8s2' ? 'https://goksirgornagrupa.pl/turystyka/' : page
  
  return (
    <div className={css.articleContainer}>
      <div className={css.articleImg}>
        <time className={css.dateTime} dateTime={article.publishedAt}>{extractDate(article.publishedAt)}</time>
        <img src={imageSrc} alt="" width='300' height='174'/>
      </div>
      <article className={css.articleItem}>
        <h3><Link target={article.id === 'clrds6uk6if5d0but4mf0j8s2' ? '_blank':'_self'} className={css.articleRef} to={src} state={{from: location}}>{article.title}</Link></h3>
      </article>
    </div>
  )
}

export default NewsItem