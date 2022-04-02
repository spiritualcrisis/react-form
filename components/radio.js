import React from "react";

const Radio = ({ label, id, name, checked, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="form-inputs"
        id={id}
        checked={checked}
        name={name}
        type={type}
      />
    </div>
  );
};

export default Radio;
