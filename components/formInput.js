import React from "react";
import Checkbox from "./checkbox";
import Input from "./Input";
import Radio from "./radio";

const FormInput = (props) => {
  const { type, label, value, placeholder, checked, id, name } = props;
  console.log(type);
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
        />
      );
    default:
      return (
        <Input
          label={label}
          value={value}
          checked={checked}
          name={name}
          type={type}
          placeholder={placeholder}
          id={id}
        />
      );
  }
};

export default FormInput;
