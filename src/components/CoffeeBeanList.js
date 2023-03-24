import React from "react";
import CoffeeBean from "./CoffeeBean";
import PropTypes from "prop-types";

function CoffeeBeanList(props) { 
  return (
    <>
      <hr />
      {props.coffeeBeanList.map((bean) =>
        <CoffeeBean
          whenBeanClicked = { props.onBeanSelection }
          name={bean.name}
          origin={bean.origin}
          price={bean.price}
          roast={bean.roast}
          id={bean.id}
          key={bean.id}/>
      )}
    </>
  );
}

CoffeeBeanList.propTypes = {
  coffeeBeanList: PropTypes.array,
  onBeanSelection: PropTypes.func
};

export default CoffeeBeanList;
