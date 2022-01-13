//password Field component
//Renders for every password field in json file

import React, { useState, useContext } from "react";

import { FormContext } from "../../FormContext";

function Password({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
}) {
  const { handleChange } = useContext(FormContext);
  //The below lines are not used
  //But incase if we have to check for password conditions we can use the following
  // const [password, setpassword] = useState("");
  // const [passstatus, setpassstatus] = useState(false);

  // var s = "";
  // function handler(e) {
  //   setpassword(e.target.value);
  //   s += e.target.value;

  //   var p = /\d/g;
  //   setpassstatus(p.test(s) && /[A-Z]/.test(s) && s.length >= 8);
  // }

  return (
    <div className="pass">
      <div className="form-group">
        <label for="exampleInputPassword1">{field_label}</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(event) => {
            handleChange(field_id, event);
          }}
          value={field_value}
          placeholder={field_placeholder}
        />
      </div>
    </div>
  );
}
export default Password;
