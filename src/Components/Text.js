import React, { useState, useContext } from "react";
import "../Styles/Fields.css";
import { FormContext } from "../FormContext";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

function Text({ field_id, field_label, field_placeholder, field_value }) {
  const { handleChange } = useContext(FormContext);
  const [text, settext] = useState("");

  function handler(e) {
    settext(e.target.value);

    console.log(e.target.value, field_value);
  }

  return (
    <div>
      <label htmlFor={field_label}>
        {field_label}{" "}
        <input
          id={field_id}
          name="text"
          type="text"
          onChange={(event) => handleChange(field_id, event)}
          value={field_value}
          placeholder={field_placeholder}
        />
      </label>
    </div>
  );
}

function Password({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
}) {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="pass">
      <label htmlFor="password">
        {field_label}
        <input
          id={field_id}
          name={field_id}
          type="password"
          onChange={(event) => handleChange(field_id, event)}
          value={field_value}
          placeholder={field_placeholder}
        />
      </label>
    </div>
  );
}
export { Text, Password };

// function Countrystates() {
//   const [count, setcount] = useState("");
//   const [state, setstate] = useState("");
//   function handler(e) {
//     setcount(e);
//   }
//   function handlerstate(e) {
//     setstate(e);
//   }
//   return (
//     <div>
//       <CountryDropdown value={count} onChange={handler} />
//       <RegionDropdown country={count} value={state} onChange={handlerstate} />
//     </div>
//   );
// }

// function Checkbox() {
//   const [check, setcheck] = useState(true);
//   function handler(e) {
//     setcheck(e.target.checked);
//     console.log(check);
//   }
//   return (
//     <div>
//       <label htmlFor="">
//         <input type="checkbox" onChange={handler} name="boy" checked={check} />
//         Boy
//       </label>
//     </div>
//   );
// }
// function Image() {
//   const [img, setimg] = useState("");
//   function handler(e) {
//     setimg(e.target.files[0]);
//     console.log(URL.createObjectURL(e.target.files[0]));
//   }
//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handler} />
//     </div>
//   );
// }
// const Email = () => {
//   const [email, setemail] = useState("");

//   function handleChange(e) {
//     setemail(e.target.value);
//   }
//   return (
//     <div>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={handleChange}
//         value={email}
//       />
//     </div>
//   );
// };
// const Date = () => {
//   const [date, setdate] = useState("");

//   function handleChange(e) {
//     setdate(e.target.value);
//   }
//   return (
//     <div>
//       <input
//         id="date"
//         name="date"
//         type="date"
//         onChange={handleChange}
//         value={date}
//       />
//     </div>
//   );
// };

// function Desc() {
//   const [desc, setdesc] = useState("");

//   function handleChange(e) {
//     setdesc(e.target.value);
//   }

//   return (
//     <div>
//       <textarea
//         rows={5}
//         cols={30}
//         maxLength="50"
//         id="desc"
//         name="desc"
//         value={desc}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }

// export { Email, Text, Password, Desc, Date, Countrystates, Checkbox, Image };
