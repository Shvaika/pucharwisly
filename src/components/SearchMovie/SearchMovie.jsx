import { useState } from "react"



export const SearchMovie = ({onSubmit, children}) => {
  const [query, setQuery] = useState('')

  const handleChange = (elem) => {
    setQuery(elem.target.value)
   
  }

  const handleSubmit = (elem) => {
    elem.preventDefault();
  
    if (!query.trim()) return alert("Can not be empty")
    onSubmit(query)
    setQuery('')
  }

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