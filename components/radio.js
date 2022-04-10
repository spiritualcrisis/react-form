import React from "react";

const Radio = ({ label, id, name, checked, type, handleChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="form-inputs"
        id={id}
        checked={checked}
        name={name}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
};

export default Radio;
