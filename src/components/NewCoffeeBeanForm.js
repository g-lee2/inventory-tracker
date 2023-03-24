import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewCoffeeBeanForm(props) {

  function handleNewCoffeeBeanFormSubmission(event) {
    event.preventDefault();
    props.onNewBeanCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      price: parseInt(event.target.price.value), 
      roast: event.target.roast.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeBeanFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name of Coffee' 
        />
        <input
          type='text'
          name='origin'
          placeholder='Origin' 
        />
        <input
          type='number'
          name='price'
          placeholder='Price/lb' 
        />
        <input
          type='text'
          name='roast'
          placeholder='Roast' 
        />
        <button type='submit'>Add Coffee Bean!</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeBeanForm.propTypes = {
  onNewBeanCreation: PropTypes.func
};

export default NewCoffeeBeanForm;
