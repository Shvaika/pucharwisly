import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import css from './Home.module.css'
import NewsList from "components/NewsList/NewsList";


const Home = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [news, setNews] = useState([])
  const [main, setMain] = useState([])
  
  const apiUrl = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clr82i1dt043r01wadskebz7p/master';

  const location = useLocation();

  useEffect(() => {
    const latestNews = async () => {
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
              newses(first: 3){
                id
                title
                publishedAt
                articleImg {
                  url
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
        setNews(result.data.newses);
      } catch (error) {
        setError('Error fetching data. Please check the console for details.');
      } finally {
        setLoading(false)
      }
    };

    const mainNews = async () => {
      try {
        setLoading(true)
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            query Latest {
              newses(last: 3) {
                articleImg {
                  url
                }
                publishedAt
                page
                id
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
        setMain(result.data.newses.reverse());
      } catch (error) {
        setError('Error fetching data. Please check the console for details.');
      } finally {
        setLoading(false)
      }
    };


    latestNews();
    mainNews();
    let repeat = false;
    setMain([...main].filter((el) => {
     news.forEach((item) => {
       if (item.id === el.id) {
        console.log('item', item)
        repeat=true
      }
     })
      return repeat
  }))
  }, []);
 
  
  
    return (
      <>
        {loading && <p>Ładowanie...</p>}
        {error && <p>Coś poszło nie tak...</p>}
        <main className={css.container}>
          <article className={css.newsContainer}>
            <NewsList komunikaty={news} location={location } />
          </article>
          <article className={css.newsContainer}>
            <h2>AKTUALNOŚCI</h2>
            <NewsList komunikaty={main} location={location }/>
          </article>
        </main>
      </>
    )
}
export default Home;