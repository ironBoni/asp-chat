import React, { useState } from "react";
import "./SignInPage.css";
import img from "../../imgs/webIcon.png";
import LogInForm from "../LogInForm/LogInForm.js";
import RegisterInForm from "../RegisterInForm/RegisterInForm.js";
import { Navigate } from 'react-router-dom';

const SignInPage = () => {

  function login() {
    document.getElementById("LogIn").style.left = "50px"
    document.getElementById("Register").style.left = "450px"
    document.getElementById("btn").style.left = "0"
    document.getElementById("box").style.height = "380px"
  }
  function register() {
    document.getElementById("LogIn").style.left = "-400px"
    document.getElementById("Register").style.left = "50px"
    document.getElementById("btn").style.left = "110px"
    document.getElementById("box").style.height = "605px"
  }

  const [isSubmittedReg, setIsSubmittedReg] = useState(false);
  const [isSubmittedUser, setIsSubmittedUser] = useState(false);

  //user register submit
  function submitForm() {
    setIsSubmittedReg(true);
    login();
  }
  //user log in submit
  function submitFormUser() {
    setIsSubmittedUser(true);
  }
  return (
    <div type="form" className="hero h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="form-box d-flex justify-content-center" id="box">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container ">
              <img className="logo" src={img} alt="Logo"></img>
            </div>
          </div>
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={login}>Log In</button>
            <button type="button" className="toggle-btn" onClick={register}>Register</button>
          </div>

          <RegisterInForm submitForm={submitForm} />
          {isSubmittedUser ? <Navigate to='/chat' /> : <LogInForm submitForm={submitFormUser} />}
        </div>
      </div>
    </div>

  )



};


export default SignInPage;
