import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';


const Button  = (props) => {
  const {
    name,
    onClick,
    isDisabled,
    type
  } = props;


  return (  <button
    className= {`my-button ${isDisabled ? 'disabled': ''}`}
    disabled={isDisabled}
    type={type}
    onClick={onClick}>
    {name}
  </button>)
            
}



Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};


export default Button;