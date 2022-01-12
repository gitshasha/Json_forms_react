import React, { useState, useContext } from "react";
import "../Styles/Fields.css";
import { FormContext } from "../FormContext";

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
//password Field component
//Renders for every password field in json file
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
//Checkbox component
//renders for evaery Checkbox type in json file
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
//Select Field component
//Renders for every select field in json file
function Select({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
}) {
  const { handleChange } = useContext(FormContext);
  return (
    <>
      {" "}
      <label className="form-label">{field_label}</label>
      <select
        className="form-control"
        aria-label="Default select example"
        onChange={(event) => handleChange(field_id, event)}
      >
        <option>Open this select menu</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
      </select>
    </>
  );
}

export { Text, Password, Checkbox, Select };
