import React from "react";

const Input = ({ label, id, name, value, type, placeholder }) => {
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
      />
    </div>
  );
};

export default Input;
