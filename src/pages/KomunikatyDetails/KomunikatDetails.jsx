import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import css from './KomunikatDetails.module.css'
import { extractDate } from './date'
// import { extractDate } from './date'

const KomunikatDetails = () => {
  const { komunikatId } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [komunikat, setKomunikat] = useState([]);

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
              query Komunikaty {
                komunikat(where: {id: "${komunikatId}"}) {
                  content {
                    html
                  }
                  publishedAt
                  title
                }
              }
            `,
          }),
        })
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setKomunikat(result.data.komunikat);
      } catch (error) {
        setError('Error fetching data. Please check the console for details.');
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);
  console.log('komunikat', komunikat)
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Coś poszło nie tak...</p>}
        <main className={css.main}>
      <Link to='/komunikaty'>Powrót</Link>
      <article className={css.article}>
        <h1>{komunikat.title}</h1>
        <hr />
        <time dateTime={komunikat.publishedAt}>{komunikat.publishedAt && extractDate(komunikat.publishedAt)}</time>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: komunikat.content?.html }}></div>
      </article>
    </main >
  </>
  )
}

export default KomunikatDetails