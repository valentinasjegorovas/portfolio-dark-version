import React from 'react';
import PropTypes from 'prop-types';
import './container.scss';

const Container = (props) => {
  return <div className="container">{props.children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
};

export default Container;
