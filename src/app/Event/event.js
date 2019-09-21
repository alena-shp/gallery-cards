import React, { Component } from 'react'
import Card from '../../components/Card'
import Navbar from '../../components/navbar'

const galleryData = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/300/150',
    title: 'Album name'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/300/150',
    title: 'Album name'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/300/140',
    title: 'Album name'
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/280/150',
    title: 'Album name'
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/320/150',
    title: 'Album name. Lorem ipsum dolor sit amet.'
  }
]

export default class Event extends Component {
  render() {
    return (
      <div className="page-container">
        <Navbar />
        <div className="content">
          <h1>Add photos of yours from your sporting life</h1>
          <div className="gallery">
            <header className="gallery__header">
              <div className="gallery__title">Media</div>
              <button>create album</button>
            </header>
            <div className="gallery__cards">
              {galleryData.map(card => (
                <Card
                  key={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                />
              ))}
            </div>
          </div>
          <footer className="gallery__actions">
            <button className="button-later">I will do it later</button>
            <button className="button-finish">Finish</button>
          </footer>
        </div>
      </div>
    )
  }
}
