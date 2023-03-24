import React from "react";
import PropTypes from "prop-types";

function CoffeeBean(props) {
  return (
    <>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
        <h3>{props.name}</h3>
        <hr/>
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
