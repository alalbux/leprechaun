import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  disabled,
  onClick,
  size,
}) => {
 return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
     {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

Button.defaultProps = {
  children: null,
  disabled: false,
  onClick: null,
  type: 'button',
}

export default Button
