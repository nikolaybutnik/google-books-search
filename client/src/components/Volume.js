import React from 'react'

function Volume({ title, authors, description, image, link }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Authors: {authors ? authors.join(', ') : 'N/A'}</p>
      <p>
        Description: {description ? description : 'No description available'}
      </p>
      <img src={image ? image : 'https://placehold.it/128x211'} alt={title} />
      <p>Link to book: {link}</p>
    </div>
  )
}

export default Volume
