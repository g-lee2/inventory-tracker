import React, { useState } from "react";
import PropTypes from "prop-types";

function CoffeeBeanDetail(props) {
  const { bean, onClickingDelete } = props;
  const [coffeeLeft, setCoffeeLeft] = useState(130);

  function sellCoffeeBean() {
    setCoffeeLeft(prevCoffeeLeft => prevCoffeeLeft - 1);
  }

  return (
    <>
      <h1>Coffee Bean Detail</h1>
      <h3>{bean.name} - ${bean.price}/lb</h3>
      <p>origin: {bean.origin}</p>
      <p>roast: {bean.roast}</p>
      <p>Coffee Bean available for purchase: {coffeeLeft === 0 ? "Sold Out" : `${coffeeLeft}lbs`}</p>
      <button disabled={coffeeLeft === 0} onClick={sellCoffeeBean}>Sell 1 Pound of Coffee Bean</button>
      <button onClick={ props.onClickingEdit }>Update Coffee Bean Detail</button>
      <button onClick={() => onClickingDelete(bean.id) }>Delete Coffee Bean</button>
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
