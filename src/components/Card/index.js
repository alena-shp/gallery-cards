import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

import iconClose from './../../assets/icons/close.svg'
import iconDelete from './../../assets/icons/delete.svg'

import './index.css'

const Card = props => {
  const { imageUrl, title, location, description, typeAlbum, typePhoto } = props

  return (
    <div className="card">
      <img className="card__img" src={imageUrl} alt="" />

      {typeAlbum && (
        <Fragment>
          {title && <div className="card__title">{title}</div>}
          <div className="card__actions">
            <button className="button-edit">edit album</button>
            <div className="button-delete">
              <img src={iconDelete} alt="" />
            </div>
          </div>
        </Fragment>
      )}

      {typePhoto && (
        <Fragment>
          <div className="card__close">
            <img src={iconClose} alt="" />
          </div>
          <TextField placeholder="Photo title" defaultValue={title} />
          <TextField placeholder="Location" defaultValue={location} />
          <TextField
            multiline
            rows="4"
            placeholder="Description"
            defaultValue={description}
          />
        </Fragment>
      )}
    </div>
  )
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  typeAlbum: PropTypes.bool,
  typePhoto: PropTypes.bool
}

Card.defaultProps = {
  typeAlbum: false,
  typePhoto: false
}

export default Card
