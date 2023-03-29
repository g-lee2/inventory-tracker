import React from "react";
import PropTypes from "prop-types";
import beanImage from "../assets/img/coffee-bean.png";

function CoffeeBeanDetail({ bean, onClickingDelete, onClickingSell, onClickingEdit }) {
  return (
    <div className="product-details">
      <div className="second-bean-image-container">
        <img src={beanImage} className="second-bean-image" />
      </div>
      <h1>{bean.name} Detail</h1>
      <h3>Price per pound: ${bean.price}/lb</h3>
      <h3>Origin: {bean.origin}</h3>
      <h3>Roast: {bean.roast}</h3>
      <h3>Coffee Bean available for purchase: {bean.quantity === 0 ? "Out of Stock" : `${bean.quantity}lbs`}</h3>
      <hr />
      <div className="details-page-buttons">
        <button disabled={bean.quantity === 0} onClick={() => onClickingSell(bean.id)}>Sell 1lb</button>
        <button onClick={onClickingEdit}>Update Detail</button>
        <button onClick={() => onClickingDelete(bean.id)}>Delete</button>
      </div>
    </div>
  );
}

CoffeeBeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeBeanDetail;
