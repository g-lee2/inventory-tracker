import React from "react";
import PropTypes from "prop-types";
import beanImage from "../assets/img/coffee-bean.png";

function CoffeeBean(props) {
  return (
    <div onClick = {() => props.whenBeanClicked(props.id)} className="coffee-beans">
      <img src={beanImage} className="bean-image" />
      <div className="bean-text">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

CoffeeBean.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string, 
  whenBeanClicked: PropTypes.func 
};

export default CoffeeBean;
