import React from 'react'

function SavedVolume({
  id,
  title,
  authors,
  description,
  image,
  link,
  savedBooks,
  setSavedBooks,
}) {
  const handleDeleteBook = () => {
    // console.log(id)
    fetch(`/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(savedBooks)
    const filteredBooks = savedBooks.filter((book) => {
      return book._id !== id
    })
    // console.log(filteredBooks)
    setSavedBooks(filteredBooks)
    // .then((res) => res.json())
    // .then((data) => console.log(data))
  }

  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <button>
        <a href={link} target="_blank" rel="noreferrer">
          View Book
        </a>
      </button>
      <button onClick={handleDeleteBook}>Delete</button>
      <p>Authors: {authors}</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default SavedVolume
