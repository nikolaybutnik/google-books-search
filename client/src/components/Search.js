import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

function Search({ search, results, setSearch, setResults }) {
  return (
    <div>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setResults={setResults}
      />
      <SearchResults results={results} />
    </div>
  )
}

export default Search
