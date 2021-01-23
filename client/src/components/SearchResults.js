import React from 'react'
import Volume from './Volume'

function SearchResults({ results }) {
  return (
    <div>
      <div
        style={{
          borderBottom: 'solid black thin',
          marginTop: '10px',
        }}
      >
        <h3 style={{ marginLeft: '25px', marginBottom: '5px' }}>Results</h3>
      </div>
      {results.map((book) => (
        <Volume
          key={book.key}
          title={book.volumeInfo.title}
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
          link={
            book.volumeInfo.infoLink
              ? book.volumeInfo.infoLink
              : 'No link available.'
          }
        />
      ))}
    </div>
  )
}

export default SearchResults
