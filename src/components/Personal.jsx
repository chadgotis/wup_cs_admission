import React from "react";

const Personal = ({ next }) => {
  return (
    <div>
      <p>Personal Information</p>
      <div className="input-group">
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" />
      </div>
      <div className="input-group">
        <label htmlFor="middlename">Middle Name</label>
        <input type="text" name="middlename" />
      </div>
      <div className="input-group">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" />
      </div>
      <div className="input-group">
        <label htmlFor="lastname">Sex</label>
        <input type="radio" name="sex" value="Male" checked />
        <label htmlFor="male">Male</label>
        <input type="radio" name="sex" value="Female" />
        <label htmlFor="male">Female</label>
      </div>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Personal;
