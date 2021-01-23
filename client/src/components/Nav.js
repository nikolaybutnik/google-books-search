import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <navbar
      className="navbar"
      style={{
        justifyContent: 'left',
        borderBottom: 'thick black solid',
        backgroundColor: 'white',
      }}
    >
      <h1 style={{ margin: '10px', marginRight: '50px' }}>
        React Google Books Search
      </h1>
      <Link to="/search">
        <h4 style={{ margin: '10px' }}>Search</h4>
      </Link>
      <Link to="/saved">
        <h4 style={{ margin: '10px' }}>Saved</h4>
      </Link>
    </navbar>
  )
}

export default Nav
