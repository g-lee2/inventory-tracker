import React from "react";
import CoffeeBean from "./CoffeeBean";
import PropTypes from "prop-types";

function CoffeeBeanList(props) { 
  return (
    <>
      <hr />
      {props.coffeeBeanList.map((bean, index) => 
        <CoffeeBean name={bean.name}
          origin={bean.origin}
          price={bean.price}
          roast={bean.roast}
          key={index} />
      )}
    </>
  );
}

CoffeeBeanList.propTypes = {
  coffeeBeanList: PropTypes.array
};

export default CoffeeBeanList;
