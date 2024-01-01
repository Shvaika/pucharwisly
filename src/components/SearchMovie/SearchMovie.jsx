import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"



export const SearchMovie = () => {
  const [query, setQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (elem) => {
    setQuery(elem.target.value)
  }

  const handleSubmit = (elem) => {
    elem.preventDefault();
    setSearchParams({search: query})
  
    if (!query.trim()) return alert("Can not be empty")
    setQuery('')
  }
  
  useEffect(() => {
   !query && setQuery(searchParams.get('search')) 
  }, [searchParams])

    return (
     
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                name="search"
                value={query}
                onChange={handleChange}
            />
            <button type="submit" >
                Search
            </button>
        </form>
        
    );
}