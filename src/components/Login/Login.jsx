import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { TokenContext } from "../../Context/TokenContext";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

const [apiError,setApiError] = useState(null)
let {setToken} = useContext(TokenContext);
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
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "Invalid password").required("Required"),
})

async function login(values){
  try {
    setApiError(null);
    let {data} = await axios.post(`http://localhost:3000/api/v1/auth/login`, values)
console.log(data);
if(data.message == "Welcome"){
  localStorage.setItem("userToken", data.token);
  setToken(data.token);
navigate("/")
}
  } catch (error) {
    console.log(error);
    setApiError(error.response.data.message);
    
  }
}

  let loginForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: login
  });

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2> Sign To Your Account </h2>
          {apiError ? (
                <div class="alert alert-danger" role="alert">
                  {apiError}
                </div>
              ) : (
                ""
              )}
          <form onSubmit={loginForm.handleSubmit}>
            <div className="form-floating mb-4">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={loginForm.values.email}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
              />
              <label htmlFor="email">Email</label>
              {loginForm.errors.email && loginForm.touched.email ? (
                <div class="alert alert-danger" role="alert">
                  {loginForm.errors.email}
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
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
              />
              <label htmlFor="password">password</label>
              {loginForm.errors.password && loginForm.touched.password ? (
                <div class="alert alert-danger" role="alert">
                  {loginForm.errors.password}
                </div>
              ) : (
                ""
              )}
            </div>
            <button className="btn btn-info">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
