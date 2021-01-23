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
    <div
      style={{
        border: 'solid black thin',
        margin: '10px',
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#F0F0F0',
      }}
    >
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ border: 'Solid 5px #C83E3E' }} />
      <div style={{ margin: '10px', marginLeft: '0px' }}>
        <button style={{ padding: '5px' }}>
          <a href={link} target="_blank" rel="noreferrer">
            View
          </a>
        </button>
        <button onClick={handleDeleteBook} style={{ padding: '5px' }}>
          Delete
        </button>
      </div>
      <p>
        <h4>Authors:</h4> <p>{authors}</p>
      </p>
      <p>
        <h4>Description:</h4> <p>{description}</p>
      </p>
    </div>
  )
}

export default SavedVolume
