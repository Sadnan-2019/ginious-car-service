// import { Button } from 'bootstrap';
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { async } from "@firebase/util";
// import auth from "../../firebase.init";

import useToken from "../../../hooks/useToken";


const Register = () => {
  const [token]= useToken()
  const [agree,setAgree]  = useState(false)
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
   

  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("login");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
   await createUserWithEmailAndPassword(email, password);

   await updateProfile({ displayName:name });
          // alert('Updated profile');
          console.log("Update profile")
          navigate("/home")
//     console.log(email, password,name);
  };
  if(token){

          navigate("/home")
          // console.log(user,"user")
  }

  return (
    <div className="w-50  mx-auto">
      <h1 className="text-center">Please Register</h1>

      <Form onSubmit={handleRegister}   >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="terms" className={agree ? "text-primary": "text-danger"} id="terms" label="Accept genious car Terms & Condition " onClick={()=>setAgree(!agree)} />
        </Form.Group>
        <input className=" btn btn-info" type="submit" value="Register" disabled ={!agree} />
        
      </Form>
      <p className="text-center bg-dark text-light mt-2 rounded">
        Already accout?
        <Link
          to="/login"
          className="text-center text-decoration-none text-danger"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
