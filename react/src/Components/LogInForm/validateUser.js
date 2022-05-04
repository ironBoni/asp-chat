import { users } from "../../Data/data";

export default function validateInfo(values) {
  var isValidateOk = true;
  let errors = {};

  //user field is empty
  if (!values.id.trim()) {
    errors.id = 'id is required';
    isValidateOk = false;
    return { errors, isValidateOk };
  }

  //get user info
  const userData = users.find((user) => user.id === values.id);
  if (userData) {
    //user passwords don't match
    if (userData.password !== values.password) {
      errors.password = 'id or Password does not match';
      isValidateOk = false;
    }
    //user was not found
  } else {
    errors.id = 'id or Password does not match';
    isValidateOk = false;
  }
  return { errors, isValidateOk };
}