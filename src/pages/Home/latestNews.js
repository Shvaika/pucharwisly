
  const apiUrl = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clr82i1dt043r01wadskebz7p/master';
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
        setNews(result.data.newses.reverse());
      } catch (error) {
        setError('Error fetching data. Please check the console for details.');
      } finally {
        setLoading(false)
      }
    };