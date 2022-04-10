import React from "react";

const Checkbox = ({ label, id, name, checked, type, handleChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="form-inputs"
        id={id}
        name={name}
        checked="checked"
        type={type}
        onChange={handleChange}
      />
    </div>
  );
};

export default Checkbox;
