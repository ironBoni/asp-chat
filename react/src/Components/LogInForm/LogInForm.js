import "./LogInForm.css";
import validate from "./validateUser";
import useForm from "../SignInPage/UseForme";
import React from "react";
const LogInForm = (props) => {
  
  const { handleChange, values,handleSubmit,errors } = useForm(props.submitForm,validate)


  return (
    <form id="LogIn" className="input-form" onSubmit={handleSubmit}>
      <input type="text" className="input-field" placeholder="User Name" autoComplete="off"
        name="username" value={values.username} onChange={handleChange}></input>
        {<p className="error" >{errors.username}</p>}
        {<p className="error" >{errors.password}</p>}
      <input type="password"
       className="input-field" placeholder="Enter Password" 
        name="password" value={values.password} onChange={handleChange}></input>
      <button type="submit" className="submit-btn" >Log In</button>
    </form>
  );
}
export default LogInForm;