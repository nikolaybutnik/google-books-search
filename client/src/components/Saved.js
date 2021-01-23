import React, { useState, useEffect } from 'react'
import SavedVolume from './SavedVolume'

function Saved() {
  const [savedBooks, setSavedBooks] = useState([])
  useEffect(() => {
    fetch('/books', {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((savedBooks) => {
        console.log(savedBooks)
        setSavedBooks(savedBooks)
      })
  }, [])

  return (
    <>
      <div>
        {savedBooks.map((book) => {
          return (
            <SavedVolume
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
            />
          )
        })}
      </div>
    </>
  )
}

export default Saved
