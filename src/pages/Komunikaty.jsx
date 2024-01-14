import NewsList from 'components/NewsList/NewsList';
import React, { useState, useEffect } from 'react';

const Komunikaty = () => {
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
            query Komunikaty {
              newses(where: {page: "Komunikaty"}) {
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
        setNews(result.data.newses.reverse());
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
      {loading && <div>Loading...</div>}
      {error && <div>Coś poszło nie tak</div>}
      <NewsList komunikaty={news} />
    </>
  );
};

export default Komunikaty;


