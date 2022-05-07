import { useState, useEffect } from 'react';
import { users } from '../../Data/data';

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    id: '',
    name: '',
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

  async function handleSubmit(e) {
    e.preventDefault();
    var result  = validate(values)
    setErrors(result.errors);
    
    if (e.target.name !== "Register") {
      
        // POST request to add contact to server
        console.log(data);
        var config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        console.log('before POST')
        var res = await fetch(dataServer+"api/Contacts/", config);
        var token = await res.join();
        localStorage.setItem('token', token);
        console.log(token);
    }
    if (e.target.name === "Register" && result.flag ) {

      users.push({
        id: values.id, name: values.name, password: values.password,
        profileImage: values.profileImage
      })
      setValues({
        id: '',
        name: '',
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
        localStorage.setItem("id", values.id);
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;