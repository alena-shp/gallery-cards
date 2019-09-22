import React from 'react'
import PropTypes from 'prop-types'

import iconDelete from './../../assets/icons/delete.svg'

import './index.css'

const Card = props => {
  return (
    <div className="card">
      <img className="card__img" src={props.imageUrl} alt="" />
      {props.title && <div className="card__title">{props.title}</div>}
      <div className="card__actions">
        <button className="button-edit">edit album</button>
        <div className="button-delete">
          <img src={iconDelete} alt="" />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default Card
