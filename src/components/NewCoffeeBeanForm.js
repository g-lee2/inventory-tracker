import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "../ReusableForm";

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
    <>
      <ReusableForm 
        formSubmissionHandler={handleNewCoffeeBeanFormSubmission}
        buttonText="Add Coffee Bean" 
      />
    </>
  );
}

NewCoffeeBeanForm.propTypes = {
  onNewBeanCreation: PropTypes.func
};

export default NewCoffeeBeanForm;
