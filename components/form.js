import React, { Suspense, useEffect, useState } from "react";
import FormInput from "./formInput";

const Form = () => {
  const [formData, setFormData] = useState([]);
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
    const changedFormData = [...formData];
    changedFormData[eleId].value = event.target.value;
    setFormData(changedFormData);
  };
  const handleSubmitUserData = (e) => {
    e.preventDefault();
    console.log(formData); // logging details
  };

  return (
    <div className="container lg:max-w-xl align-items mx-auto justify-items-center ">
      <form onSubmit={handleSubmitUserData} className="user-form">
        {formData.map((input) => {
          return (
            <FormInput key={input.id} {...input} handleChange={handleChange} />
          );
        })}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
