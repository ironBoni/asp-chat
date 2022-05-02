import { useState, useEffect } from 'react';
import { users } from '../../Data/data';

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    username: '',
    nickname: '',
    profileImage: '/images/default.jpg',
    password: '',
    confPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = e => {
    e.preventDefault();
    var result  = validate(values)
    setErrors(result.errors);
    
    if (e.target.name === "Register" && result.flag ) {

      users.push({
        username: values.username, nickname: values.nickname, password: values.password,
        profileImage: values.profileImage
      })
      setValues({
        username: '',
        nickname: '',
        profileImage: '/images/default.jpg',
        password: '',
        confPassword: '',

      })
    }

    setIsSubmitting(true);
  };


  useEffect(
    (e) => {
      if (Object.keys(errors).length === 0 && isSubmitting) {

        submitForm();
        localStorage.setItem("username", values.username);
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;