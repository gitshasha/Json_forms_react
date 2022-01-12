import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import formJSON from "./Formdetails.json";
import { FormContext } from "./FormContext";
import axios from "axios";
function App() {
  const [formdetails, setformdetails] = useState([]);

  useEffect(() => {
    setformdetails(formJSON[0]); //storing  form details from json file
  }, []);
  const handleSubmit = (event) => {
    //executes when the form is submitted
    event.preventDefault();
    axios.post("http://localhost:5000/posts", formdetails); //posting the details to Json server
  };
  //page label stores the title of the page
  const { fields, page_label } = formdetails ?? {}; //storing the field details into fields
  // Function to update the values of all the fields
  //this fuction is passed to all the components
  //It runs whenever there is a change in input fields
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
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="app  container">
        <div className="title" style={{ fontSize: "2em", margin: "2vh" }}>
          {page_label}
        </div>
        {
          //maping through all the arrays in fields
          //for each array in fields The component Home renders
          //home renders a input field based on the details from Json file
          fields &&
            fields.map((details, index) => (
              <div>
                <Home fields={details} />
              </div>
            ))
        }
        <button
          type="submit"
          style={{ margin: "2vh" }}
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
