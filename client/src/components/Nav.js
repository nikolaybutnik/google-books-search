import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
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

export default Nav
