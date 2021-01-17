import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

function Search({ results, setSearch, handleSearch }) {
  return (
    <div>
      <div>Hello</div>
      <SearchBar setSearch={setSearch} handleSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  )
}

export default Search
