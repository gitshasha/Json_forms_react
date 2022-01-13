import React, { useContext } from "react";

import { FormContext } from "../../FormContext";

function Button({ field_id, field_label, field_value }) {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <div className="input-group mb-3">
        <button
          onClick={(event) => handleChange(field_id, event)}
          className="btn btn-outline-secondary"
          type="button"
        >
          {field_label}
        </button>
      </div>
    </div>
  );
}

export default Button;
