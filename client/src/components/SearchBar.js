import React, { useRef } from 'react'

function SearchBar({ search, setSearch, setResults }) {
  let inputRef = useRef()

  const bookSearch = () => {
    const key = 'key=AIzaSyD7eisjTcsGCJJVejECr8iKoYCzrmdtK34'
    if (search) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&${key}`)
        .then((res) => res.json(res))
        .then((data) => {
          if (data.totalItems !== 0) {
            const books = data.items.map(
              (book) => (book = { ...book, key: book.id })
            )
            setResults(books)
            inputRef.current.value = ''
          } else {
            console.log(inputRef.current)
            inputRef.current.value = ''
            inputRef.current.placeholder = 'Try searching again...'
            setResults([])
          }
        })
        .catch((err) => console.log(err))
    }
  }

  const handleSearch = (event) => {
    event.preventDefault()
    bookSearch()
  }
  return (
    <form className="form-inline" onSubmit={handleSearch}>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control"
          id="inputQuery"
          placeholder="Enter a keyword"
          onChange={(event) => setSearch(event.target.value)}
          ref={inputRef}
        ></input>
        <button type="submit" className="btn btn-primary mb-2">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
