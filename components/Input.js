import React from "react";

const Input = ({ label, id, name, value, type, placeholder, handleChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="text-sm  border border-gray-500 rounded-lg w-full mt-2 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 py-2 px-3 "
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
