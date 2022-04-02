import React from "react";

const Checkbox = ({ label, id, name, checked, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="form-inputs"
        id={id}
        name={name}
        checked={checked}
        type={type}
      />
    </div>
  );
};

export default Checkbox;
