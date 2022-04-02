import React, { useEffect, useState } from "react";
import { FormContext } from "../Context/FormContext";
import FormInput from "./formInput";

const Form = () => {
  const [formData, setFormData] = useState([]);

  console.log("rerender");
  //fetch data from API
  const fetchFormData = async () => {
    let formDataRes = await fetch("/api/getFormData");
    const res = await formDataRes.json();
    setFormData(res);
  };
  useEffect(() => {
    fetchFormData();
  }, []);
  const handleChange = (eleId, event) => {
    const modifiedFormData = formData.map((formEle) => {
      console.log(formEle);
      return formEle.id === parseInt(eleId)
        ? { ...formEle, value: event.target.value }
        : formEle;
    });
    console.log(modifiedFormData);
    setFormData(modifiedFormData);
  };
  const handleSubmitUserData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div>
        <form onSubmit={handleSubmitUserData} className="user-form">
          {formData.map((input) => {
            return <FormInput key={input.id} {...input} />;
          })}

          <button>Submit</button>
        </form>
      </div>
    </FormContext.Provider>
  );
};

export default Form;
