import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'

import Navbar from '../../components/navbar'

export default class Event extends Component {
  render() {
    return (
      <div className="page-container">
        <Navbar />
        <div className="content">
          <h1>Add photos of yours from your sporting life</h1>
          <div className="section gallery">
            <header className="gallery__header">
              <div className="gallery__title">Media</div>
              <Button variant="outlined" size="medium">
                create album
              </Button>
            </header>
            <div>
              <div className="card">
                <img
                  className="card__img"
                  src="https://picsum.photos/300/150"
                  alt=""
                />
                <div className="card__title">Album name</div>
                <div className="card__actions">
                  <Button size="small">edit album</Button>
                  <IconButton aria-label="Delete">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div className="card">
                <img
                  className="card__img"
                  src="https://picsum.photos/300/150"
                  alt=""
                />
                <div className="card__title">Album name</div>
                <div className="card__actions">
                  <Button size="small">edit album</Button>
                  <IconButton aria-label="Delete">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <footer className="actions">
            <Button variant="outlined" size="medium">
              I will do it later
            </Button>
            <Button variant="contained" size="medium">
              Finish
            </Button>
          </footer>
        </div>
      </div>
    )
  }
}
