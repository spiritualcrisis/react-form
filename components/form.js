import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [useGender, setUserGender] = useState(false);
  const [userEmployment, setUserEmployment] = useState(false);
  const [userAbout, setUserAbout] = useState("");
  const [userJoiningDate, setUserJoiningDate] = useState("");

  const handleSubmitUserData = () => {
    e.preventDefault();
    console.log(
      userName,
      useGender,
      userEmployment,
      userAbout,
      userJoiningDate
    );
  };
  console.log("rerender");

  return (
    <div>
      <form onSubmit={handleSubmitUserData}>
        <input
          className="form-inputs"
          id=""
          placeholder="type a user name"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="form-inputs"
          id=""
          placeholder="select gender"
          type="checkbox"
          checked={useGender}
          onChange={() => setUserGender(!useGender)}
        />
        <input
          className="form-inputs"
          id=""
          placeholder="select an option"
          type="radio"
          checked={userEmployment}
          onChange={() => {
            setUserEmployment(!userEmployment);
          }}
        />
        <input
          className="form-inputs"
          id=""
          placeholder="type something about yourself"
          type="textarea"
          value={userAbout}
          onChange={(e) => setUserAbout(e.target.value)}
        />
        <input
          className="form-inputs"
          id=""
          placeholder="select a date"
          type="date"
          value={userJoiningDate}
          onChange={(e) => setUserJoiningDate(userJoiningDate)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
