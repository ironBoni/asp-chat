import "./LogInForm.css";
import validate from "./validateUser";
import useForm from "../SignInPage/UseForme";
import React from "react";
const LogInForm = (props) => {
  
  const { handleChange, values,handleLogin,errors } = useForm(props.submitForm,validate, 'login')


  return (
    <form id="LogIn" className="input-form">
      <input type="text" className="input-field" placeholder="User Name" autoComplete="off"
        name="id" value={values.id} onChange={handleChange}></input>
        {<p className="error" >{errors.id}</p>}
        {<p className="error" >{errors.password}</p>}
      <input type="password"
       className="input-field" placeholder="Enter Password" 
        name="password" value={values.password} onChange={handleChange}></input>
      <button type="submit" className="submit-btn" onClick={handleLogin}>Log In</button>
    </form>
  );
}
export default LogInForm;