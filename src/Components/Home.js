import React from "react";
import Text from "./Inputfields/Text";
import Checkbox from "./Inputfields/Checkbox";
import Password from "./Inputfields/Password";
import Select from "./Inputfields/Select";
import Button from "./Inputfields/Button";
function Home({
  //arguments passed from App.js
  fields: {
    field_type,
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_options,
  },
}) {
  //for each type of field different component is rendered
  switch (field_type) {
    case "text":
      return (
        <Text
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "password":
      return (
        <Password
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
        />
      );
    case "button":
      return (
        <Button
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          field_id={field_id}
          field_label={field_label}
          field_value={field_value}
        />
      );

    default:
      return null;
  }
}

export default Home;
