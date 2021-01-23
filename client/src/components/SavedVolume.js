import React from 'react'

function SavedVolume({ title, authors, description, image, link }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <button>
        <a href={link} target="_blank" rel="noreferrer">
          View Book
        </a>
      </button>
      <p>Authors: {authors}</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default SavedVolume
