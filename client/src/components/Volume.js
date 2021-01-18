import React from 'react'

function Volume({ title, authors, description, image, link }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Authors: {authors}</p>
      <p>Description: {description}</p>
      <img src={image} alt={title} />
      <p>Link to book: {link}</p>
    </div>
  )
}

export default Volume
