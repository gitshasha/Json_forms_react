import React, { useState, useContext } from "react";

import { FormContext } from "../../FormContext";

//Text Field component
//Renders for every Text field in json file
function Text({ field_id, field_label, field_placeholder, field_value }) {
  const { handleChange } = useContext(FormContext); //The handler function which we import from App.js

  return (
    <div className="form-group">
      <label for="exampleInputEmail1">{field_label}</label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={(event) => handleChange(field_id, event)} //Updates field_value
        value={field_value} //Displays the value of field_value
        placeholder={field_placeholder}
      />
      <small id="emailHelp" className="form-text text-muted">
        We'll never share your {field_label} with anyone else.
      </small>
    </div>
  );
}

export default Text;
