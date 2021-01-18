import React from 'react'
import Volume from './Volume'

function SearchResults({ results }) {
  return (
    <div>
      {results.map((book) => (
        <Volume
          key={book.key}
          title={
            book.volumeInfo.title
              ? book.volumeInfo.title
              : 'No title avaialble.'
          }
          authors={
            book.volumeInfo.authors
              ? book.volumeInfo.authors.join(', ')
              : 'No authors available.'
          }
          description={
            book.volumeInfo.description
              ? book.volumeInfo.description
              : 'No description available.'
          }
          image={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : 'https://placehold.it/128x211'
          }
          link={book.selfLink ? book.selfLink : 'No link available.'}
        />
      ))}
    </div>
  )
}

export default SearchResults
