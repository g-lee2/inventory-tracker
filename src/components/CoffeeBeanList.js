import React from "react";
import CoffeeBean from "./CoffeeBean";
import PropTypes from "prop-types";

function CoffeeBeanList(props) { 
  return (
    <div>
    <h1 className="product-list">Coffee Bean Products</h1>
      <div className="coffee-container">
        {props.coffeeBeanList.map((bean) =>
          <CoffeeBean
            whenBeanClicked={ props.onBeanSelection }
            name={bean.name}
            origin={bean.origin}
            id={bean.id}
            key={bean.id}
          />
        )}
      </div>
    </div>
  );
}

CoffeeBeanList.propTypes = {
  origin: PropTypes.string,
  coffeeBeanList: PropTypes.array,
  onBeanSelection: PropTypes.func
};

export default CoffeeBeanList;
