import React from "react";
import PropTypes from "prop-types";

function CoffeeBean(props) {
  return (
    <>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
        <h3>{props.name} - ${props.price}/lb</h3>
        <p>{props.origin}</p>
        <p>{props.roast}</p>
        <hr/>
      </div>
    </>
  )
}

CoffeeBean.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  id: PropTypes.string, 
  whenBeanClicked: PropTypes.func 
};

export default CoffeeBean;
