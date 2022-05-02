import React from "react";
import "./RegisterInForm.css"
import useForm from "../SignInPage/UseForme";
import validate from "./validateRegInfo";


const RegisterInForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)


  
  return (
    <form id="Register" className="input-form" name="Register" onSubmit={handleSubmit}>
      <input type="text"
        className="input-field"
        placeholder="User Name"
        autoComplete="off"
        name="username"
        value={values.username}
        onChange={handleChange}></input>
      {<p className="error">{errors.username}</p>}

      <input type="text"
        className="input-field"
        placeholder="nick name"
        name="nickname"
        autoComplete="off"
        value={values.nickname}
        onChange={handleChange}
      ></input>
      {<p className="error" >{errors.nickname}</p>}

      <input type="password"
        className="input-field"
        placeholder="Enter Password"
        name="password"
        value={values.password}
        autoComplete="off"
        onChange={handleChange}
      ></input>
      {<p className="error" >{errors.password}</p>}

      <input type="password" autoComplete="off"
        className="input-field"
        placeholder="Confirm Password"
        name="confPassword"
        value={values.confPassword}
        onChange={handleChange}
      ></input>
      {<p className="error" >{errors.confPassword}</p>}

      <input type="file" id="chooser" name="image-upload" onInput={handleChange}></input>

      <button type="submit" className="submit-btn">Register</button>
    </form>
  );
}

export default RegisterInForm;