import React, { useEffect, useState } from 'react'
import css from './Teren.module.css'

const Teren = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [teren, setTeren] = useState([]);

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
              query Teren {
                newses(where: {page: "Teren"}) {
                  content {
                    html
                  }
                }
              }
            `,
          }),
        })
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setTeren(result.data.newses);
      } catch (error) {
        setError('Error fetching data. Please check the console for details.');
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Coś poszło nie tak...</p>}
        <main className={css.main}>
      {teren.map(el=>(<article className={css.article} key={el.id}>
        <h1>{el.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: el.content?.html }}></div>
      </article>))}
    </main >
  </>
  )
}

export default Teren