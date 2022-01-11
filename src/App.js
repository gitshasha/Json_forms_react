import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import formJSON from "./Formdetails.json";
import { FormContext } from "./FormContext";
function App() {
  const [formdetails, setformdetails] = useState([]);
  useEffect(() => {
    setformdetails(formJSON[0]);
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formdetails);
  };
  const { fields, page_label } = formdetails ?? {};
  const handleChange = (id, event) => {
    const newElements = { ...formdetails };
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;
            break;

          default:
            field["field_value"] = event.target.value;
            break;
        }
      }
      setformdetails(newElements);
    });
    console.log(formdetails);
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="app">
        {fields &&
          fields.map((details, index) => (
            <div>
              <Home fields={details} />
            </div>
          ))}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>{" "}
      </div>
    </FormContext.Provider>
  );
}

export default App;
