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
        const books = savedBooks.map((book) => {
          return { ...book, key: book._id }
        })
        setSavedBooks(books)
      })
  }, [])

  return (
    <>
      <div>
        {savedBooks.map((book) => {
          return (
            <SavedVolume
              id={book._id}
              key={book.key}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              savedBooks={savedBooks}
              setSavedBooks={setSavedBooks}
            />
          )
        })}
      </div>
    </>
  )
}

export default Saved
