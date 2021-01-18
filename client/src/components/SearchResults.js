import React from 'react'
import Volume from './Volume'

function SearchResults({ results }) {
  return (
    <div>
      {results.map((book) => (
        <Volume
          key={book.key}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          image={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : 'https://placehold.it/128x211'
          }
          link={book.selfLink}
        />
      ))}
    </div>
  )
}

export default SearchResults
