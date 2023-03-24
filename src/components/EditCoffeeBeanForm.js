import React from "react";
import ReusableForm from "../ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeBeanForm(props) {
  const { bean } = props;

  function handleEditBeanFormSubmission(event) {
    event.preventDefault();
    props.onEditBean({name: event.target.name.value, origin: event.target.origin.value, price: parseInt(event.target.price.value), roast: event.target.roast.value, id: bean.id});
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleEditBeanFormSubmission} 
        buttonText="Update Coffee Bean Detail" />
    </>
  );
}

EditCoffeeBeanForm.propTypes = {
  bean: PropTypes.object,
  onEditBean: PropTypes.func
};

export default EditCoffeeBeanForm;
