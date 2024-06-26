import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={className ? `btn ${className}` : 'btn'}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
};

export default Button;
