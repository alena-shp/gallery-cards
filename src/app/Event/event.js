import React, { Component } from 'react'
import iconDelete from './../../assets/delete.svg'
import Navbar from '../../components/navbar'

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
              <div className="card">
                <img
                  className="card__img"
                  src="https://picsum.photos/300/150"
                  alt=""
                />
                <div className="card__title">Album name</div>
                <div className="card__actions">
                  <button className="button-edit">edit album</button>
                  <div className="button-delete">
                    <img src={iconDelete} alt="" />
                  </div>
                </div>
              </div>
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
