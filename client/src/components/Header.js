import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      Google Books
      <Link to="/search" exact>
        Search
      </Link>
      <Link to="/saved" exact>
        Saved
      </Link>
    </div>
  )
}

export default Header
