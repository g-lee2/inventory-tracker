import React from "react";
import CoffeeBean from "./CoffeeBean";
import PropTypes from "prop-types";

function CoffeeBeanList(props) { 
  return (
    <div className="product-list-container">
      <h1 className="product-list">Products</h1>
      <hr className="product-divider"/>
      <div className="list-wrapper">
        <div className="coffee-container">
          {props.coffeeBeanList.length === 0 ? <h2 className="no-products">No Products Listed</h2> : props.coffeeBeanList.map((bean) =>
            <CoffeeBean
              whenBeanClicked={ props.onBeanSelection }
              name={bean.name}
              id={bean.id}
              key={bean.id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

CoffeeBeanList.propTypes = {
  name: PropTypes.string,
  coffeeBeanList: PropTypes.array,
  onBeanSelection: PropTypes.func
};

export default CoffeeBeanList;
