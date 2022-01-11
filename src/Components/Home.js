import React from "react";
import { Text, Password } from "./Text";
function Home({
  fields: {
    field_type,
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_options,
  },
}) {
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
    // case 'checkbox':
    //     return (<Checkbox
    //         field_id={field_id}
    //         field_label={field_label}
    //         field_value={field_value}
    //     />)

    default:
      return null;
  }
}

export default Home;
