import React, { useState } from "react";
import PropTypes from "prop-types";
import beanImage from "../assets/img/coffee-bean.png";

function CoffeeBeanDetail(props) {
  const { bean, onClickingDelete } = props;
  const [coffeeLeft, setCoffeeLeft] = useState(130);

  function sellCoffeeBean() {
    setCoffeeLeft(prevCoffeeLeft => prevCoffeeLeft - 1);
  }

  return (
    <div className="product-details">
      <div className="second-bean-image-container">
        <img src={beanImage} className="second-bean-image" />
      </div>
      <h1>{bean.name} Detail</h1>
      <h3>Price per pound: ${bean.price}/lb</h3>
      <h3>Origin: {bean.origin}</h3>
      <h3>Roast: {bean.roast}</h3>
      <h3>Coffee Bean available for purchase: {coffeeLeft === 0 ? "Out of Stock" : `${coffeeLeft}lbs`}</h3>
      <hr />
      <div className="details-page-buttons">
        <button disabled={coffeeLeft === 0} onClick={sellCoffeeBean}>Sell 1lb</button>
        <button onClick={ props.onClickingEdit }>Update Detail</button>
        <button onClick={() => onClickingDelete(bean.id) }>Delete</button>
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
