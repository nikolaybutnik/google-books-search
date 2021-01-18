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

  useEffect(() => {
    console.log(results)
  }, [results])

  return (
    <Router>
      <Nav />
      <Header />
      <Route
        exact
        path="/search"
        render={(props) => (
          <Search
            search={search}
            results={results}
            setSearch={setSearch}
            setResults={setResults}
            // handleSearch={handleSearch}
            {...props}
          />
        )}
      />
      <Route exact path="/saved" component={Saved} />
    </Router>
  )
}

export default App
