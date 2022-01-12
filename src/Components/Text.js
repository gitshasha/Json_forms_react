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
    <div className="form-group">
      <label for="exampleInputEmail1">{field_label}</label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={(event) => handleChange(field_id, event)}
        value={field_value}
        placeholder={field_placeholder}
      />
      <small id="emailHelp" className="form-text text-muted">
        We'll never share your {field_label} with anyone else.
      </small>
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
  const [password, setpassword] = useState("");
  const [passstatus, setpassstatus] = useState(false);
  const { handleChange } = useContext(FormContext);
  var s = "";
  function handler(e) {
    setpassword(e.target.value);
    s += e.target.value;

    var p = /\d/g;
    setpassstatus(p.test(s) && /[A-Z]/.test(s) && s.length >= 8);
  }

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
