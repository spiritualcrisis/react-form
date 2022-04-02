import React, { useContext } from "react";

import { FormContext } from "../Context/FormContext";

const Input = ({ label, id, name, value, type, placeholder }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <label>{label}</label>
      <input
        className="form-inputs"
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(event) => handleChange(id, event)}
      />
    </div>
  );
};

export default Input;
