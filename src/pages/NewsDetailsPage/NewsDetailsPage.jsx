import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import css from './NewsDetailsPage.module.css'
import { extractDate } from './date'

const NewsDetailsPage = () => {
  const { newsId } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [news, setNews] = useState([]);

  const apiUrl = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clr82i1dt043r01wadskebz7p/master';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query News {
                news(where: {id: "${newsId}"}) {
                  content {
                    html
                  }
                  page
                  publishedAt
                  title
                  id
                }
              }
            `,
          }),
        })
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setNews(result.data.news);
      } catch (error) {
        setError('Error fetching data. Please check the console for details.');
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [newsId]);

  const location = useLocation()
  const backLink = useRef(location.state?.from ?? '/')
  console.log('komunikat', news)
  return (
    <>
      {loading && <p>Ładowanie...</p>}
      {error && <p>Coś poszło nie tak...</p>}
        <main className={css.main}>
        <Link to={backLink.current} className={css.backLink}>
          <button>
            Powrót
          </button>
        </Link>
      <article className={css.article}>
        <h1>{news.title}</h1>
        <hr />
        <time dateTime={news.publishedAt}>{news.publishedAt && extractDate(news.publishedAt)}</time>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: news.content?.html }}></div>
      </article>
    </main >
  </>
  )
}

export default NewsDetailsPage