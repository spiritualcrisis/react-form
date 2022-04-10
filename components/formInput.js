import React from "react";
import Checkbox from "./checkbox";
import Input from "./Input";
import Radio from "./radio";

const FormInput = (props) => {
  const { type, label, value, placeholder, checked, id, name, handleChange } =
    props;
  switch (type) {
    case "checkbox":
      return (
        <Checkbox
          label={label}
          value={value}
          checked={checked}
          type={type}
          name={name}
          id={id}
          handleChange={handleChange}
        />
      );
    case "radio":
      return (
        <Radio
          label={label}
          value={value}
          checked={checked}
          type={type}
          name={name}
          id={id}
          handleChange={handleChange}
        />
      );
    default:
      return (
        <Input
          label={label}
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          id={id}
          handleChange={handleChange}
        />
      );
  }
};

export default FormInput;
