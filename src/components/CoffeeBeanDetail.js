import React from "react";
import PropTypes from "prop-types";

function CoffeeBeanDetail(props) {
  const { bean } = props;

  return (
    <>
      <h1>Coffee Bean Detail</h1>
      <h3>{bean.name} - ${bean.price}/lb</h3>
      <p>origin: {bean.origin}</p>
      <p>roast: {bean.roast}</p>
      <hr/>
    </>
  );
}

CoffeeBeanDetail.propTypes = {
  bean: PropTypes.object
};

export default CoffeeBeanDetail;
