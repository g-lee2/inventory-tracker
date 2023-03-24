import React from "react";
import PropTypes from "prop-types";

function CoffeeBeanDetail(props) {
  const { bean, onClickingDelete } = props;

  return (
    <>
      <h1>Coffee Bean Detail</h1>
      <h3>{bean.name} - ${bean.price}/lb</h3>
      <p>origin: {bean.origin}</p>
      <p>roast: {bean.roast}</p>
      <button onClick={ props.onClickingEdit }>Update Coffee Bean Detail</button>
      <button onClick={()=> onClickingDelete(bean.id) }>Delete Coffee Bean</button>
      <hr/>
    </>
  );
}

CoffeeBeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeBeanDetail;
