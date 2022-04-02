import React, { useEffect, useState } from "react";
import FormContext from "../Context/FormContext";

const Form = () => {
  const [formData, setFormData] = useState([]);

  const handleSubmitUserData = () => {
    //e.preventDefault();
  };
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
  const handleChange = () => {};

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
