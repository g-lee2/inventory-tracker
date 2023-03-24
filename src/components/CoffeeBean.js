import React from "react";
import PropTypes from "prop-types";

function CoffeeBean(props) {
  return (
    <>
      <div onClick = {() => props.whenBeanClicked(props.id)} className="coffee-beans">
        <h3>{props.name}</h3>
        <br />
        <h4>{props.origin}</h4>
      </div>
    </>
  )
}

CoffeeBean.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string, 
  whenBeanClicked: PropTypes.func 
};

export default CoffeeBean;
