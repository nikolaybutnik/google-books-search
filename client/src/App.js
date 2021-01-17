import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import Search from './components/Search'
import Saved from './components/Saved'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const key = 'key=AIzaSyD7eisjTcsGCJJVejECr8iKoYCzrmdtK34'
  const bookSearch = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&${key}`)
      .then((res) => res.json(res))
      .then((data) => setResults(data.items))
  }

  useEffect(() => {
    console.log(results)
  }, [results])

  const handleSearch = (event) => {
    event.preventDefault()
    bookSearch()
  }

  return (
    <Router>
      <Nav />
      <Header />
      <Route
        exact
        path="/search"
        render={(props) => (
          <Search
            results={results}
            setSearch={setSearch}
            handleSearch={handleSearch}
            {...props}
          />
        )}
      />
      <Route exact path="/saved" component={Saved} />
    </Router>
  )
}

export default App
