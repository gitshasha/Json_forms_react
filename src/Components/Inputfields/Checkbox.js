//Checkbox component
//renders for evaery Checkbox type in json file
import React, { useState, useContext } from "react";

import { FormContext } from "../../FormContext";

function Checkbox({ field_id, field_label, field_value }) {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={field_value}
        id="defaultCheck1"
        onChange={(event) => {
          handleChange(field_id, event);
        }}
      />
      <label className="form-check-label" for="defaultCheck1">
        {field_label}
      </label>
    </div>
  );
}

export default Checkbox;
