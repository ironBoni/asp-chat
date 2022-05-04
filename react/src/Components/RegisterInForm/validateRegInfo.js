import { users } from "../../Data/data";

export default function validateInfo(values) {
  let errors = {};
  var flag=true;

  if (!values.id.trim()) {
    errors.id = 'id is required';
    flag=false;
  }
  
  var pattern = /^.*(?=.*\d)(?=.*[A-Z])(?=.*[1-9]).*$/;
  if (!pattern.test(values.password)) {
    errors.password = 'Password must contain digits and at least one capital letter';
    flag=false;
  }

  if (!values.nickname.trim()) {
    errors.nickname = 'nick name required';
    flag=false;
  }

  if(values.id.indexOf(' ') >= 0) {
    errors.id = 'id cannot have spaces';
    flag = false;
  }

  users.forEach(element => {
    if (element.id === values.id){
      errors.id = 'id already exsist';
      flag=false;
    }
  });

  if (!values.password) {
    errors.password = 'Password is required';
    flag=false;
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
    flag=false;
  }

  if (!values.confPassword) {
    flag=false;
    errors.password2 = 'Password is required';
  } else if (values.confPassword !== values.password) {
    errors.confPassword = 'Passwords do not match';
    flag=false;
  }
  return {errors,flag};
}