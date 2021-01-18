import React from 'react'

function Volume({ title, authors, description, image, link }) {
  const handleBookSave = () => {
    console.log()
    const newBook = {
      title: title,
      authors: authors,
      description: description,
      image: image,
      link: link,
    }
    fetch('/books', {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
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
      <button onClick={handleBookSave}>Save Book</button>
      <p>Authors: {authors}</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default Volume
