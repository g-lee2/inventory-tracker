import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <div className="form-container">
      <h1>Form Page</h1>
      <br />
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </div>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;