import { useState, useEffect } from 'react';
import { users, dataServer } from '../../Data/data';

const useForm = (submitForm, validate, type) => {
  const [values, setValues] = useState({
    id: '',
    name: '',
    profileImage: '/images/default.jpg',
    password: '',
    confPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoginOk, setIsLoginOk] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "image-upload") {
      upImge(e)
    } else {
      setValues({
        ...values,
        [name]: value
      });
    }

  };
  const upImge = (e) => {
    let file = e.target.files[0];

    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      var profileBase64 = fileReader.result;

      values.profileImage = profileBase64

    };
  }

  async function handleLogin(e) {
    e.preventDefault();
    var result = validate(values)
    setErrors(result.errors);
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("id", values.id);
      waitForToken();
      submitForm();
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    var result = validate(values)
    setErrors(result.errors);
    console.log(result.flag);
    console.log(e.target.name);
    if (result.flag) {
      console.log("line 47");
      users.push({
        id: values.id, name: values.name, password: values.password,
        profileImage: values.profileImage
      })

      // POST request to add contact to server
      var data = {
        "id": values.id, "name": values.name, "password": values.password,
        "profileImage": values.profileImage, "server": "http://localhost:5186"
      };
      console.log(data);
      var config = {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      console.log('before POST')
      console.log(dataServer + "api/Register");
      var res = await fetch(dataServer + "api/Register", config);

      setValues({
        id: '',
        name: '',
        profileImage: '/images/default.jpg',
        password: '',
        confPassword: '',

      })
    }
    submitForm();
    console.log("after post");
  };

  async function waitForToken() {
    var res = await fetch(dataServer + "api/Login", {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Accept-Endcoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ "username": values.id, "password": values.password })})
    console.log(res);
    var token = await res.json();
    console.log(token.token);
    localStorage.setItem("token", token.token);
  }

  if (type == 'login')
    return { handleChange, handleLogin, values, errors };
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;