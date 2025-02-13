import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export default function Register() {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    cPassword: "",
  };

const [apiError,setApiError] = useState(null)
let navigate = useNavigate()

//   function validate(values){
//     const errors = {}
//     if(values.userName == ""){
//       errors.userName = "Required";
//     }else if(values.userName.length < 3){
//       errors.userName = "Min length Is 3";
//     }else if(values.userName.length > 15){
//       errors.userName = "Max length Is 15";
//     } 
//     if(values.email == ""){
//       errors.email = "Required";
//   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//     errors.email = "Invalid email";
//   }
//   if(values.password == "" ){
//     errors.password = "Required";
//   }else if(!/^[A-Z][a-z0-9]{3,8}$/i.test(values.password)){
//     errors.password = "Invalid password";
//   }
//   if(values.cPassword == "" ){
//     errors.cPassword = "Required";
//   }else if(values.password != values.cPassword){
//     errors.cPassword = "Passwords do not match";
//   }
//   console.log(errors,"errors");
//   return errors;
// }
 
const validationSchema = Yup.object().shape({
  userName: Yup.string().min(3,"Min char is 3").max(15,"Max char are 15").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "Invalid password").required("Required"),
  cPassword: Yup.string().oneOf([Yup.ref("password"),"Passwords do not match"]).required("Required"),
})

async function register(values){
  try {
    setApiError(null);
    let {data} = await axios.post(`http://localhost:3000/api/v1/auth/signup`, values)
console.log(data);
if(data.message == "Added successfully"){
navigate("/login")
}
  } catch (error) {
    console.log(error);
    setApiError(error.response.data.message);
  }
}

  let registerForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: register
  });

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2> Create New Account </h2>
          {apiError ? (
                <div class="alert alert-danger" role="alert">
                  {apiError}
                </div>
              ) : (
                ""
              )}
          <form onSubmit={registerForm.handleSubmit}>
            <div className="form-floating my-4 ">
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="User Name"
                name="userName"
                value={registerForm.values.userName}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="userName">User Name</label>
              {registerForm.errors.userName && registerForm.touched.userName ? (
                <div class="alert alert-danger" role="alert">
                  {registerForm.errors.userName}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-floating mb-4">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={registerForm.values.email}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="email">Email</label>
              {registerForm.errors.email && registerForm.touched.email ? (
                <div class="alert alert-danger" role="alert">
                  {registerForm.errors.email}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={registerForm.values.password}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="password">password</label>
              {registerForm.errors.password && registerForm.touched.password ? (
                <div class="alert alert-danger" role="alert">
                  {registerForm.errors.password}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-floating mb-5">
              <input
                type="password"
                className="form-control"
                id="rePassword"
                placeholder="rePassword"
                name="cPassword"
                value={registerForm.values.cPassword}
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
              />
              <label htmlFor="rePassword">rePassword</label>
              {registerForm.errors.cPassword && registerForm.touched.cPassword ? (
                <div class="alert alert-danger" role="alert">
                  {registerForm.errors.cPassword}
                </div>
              ) : (
                ""
              )}
            </div>
            <button className="btn btn-info">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}
