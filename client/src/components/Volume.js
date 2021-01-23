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
    }).then((res) => res.json())
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
        <button>
          <a href={link} target="_blank" rel="noreferrer">
            View Book
          </a>
        </button>
        <button onClick={handleBookSave}>Save Book</button>
      </div>
      <p>
        <h3>Authors:</h3> {authors}
      </p>
      <p>
        <h3>Description:</h3> {description}
      </p>
    </div>
  )
}

export default Volume
