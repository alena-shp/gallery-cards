import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { default as MaterialButton } from '@material-ui/core/Button'

import './index.css'

const Button = props => {
  const { className, children, typePrimary, ...restProps } = props
  const componentClass = classNames('button', className, {
    'button--primary': typePrimary
  })

  return (
    <MaterialButton
      variant="outlined"
      className={componentClass}
      {...restProps}
    >
      {children}
    </MaterialButton>
  )
}

Button.propTypes = {
  typePrimary: PropTypes.bool
}

Button.defaultProps = {
  typePrimary: false
}

export default Button
