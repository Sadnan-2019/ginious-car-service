import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

const location =useLocation();
const from = location.state?.from?.pathname || "/";
const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(
  auth
);
      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);
          let errorElement;
  const refEmail = useRef("");
  const refPassword = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = refEmail.current.value;
    const password = refPassword.current.value;
    signInWithEmailAndPassword(email,password)
   
//     console.log(email, password);
  };

  if(error){
    errorElement= <div>
      <p className="text-danger">{error?.message}</p>
    </div>
  }
  if(user){
    navigate(from, { replace: true });
  }

  const navigateRegister = (event) => {
    navigate("/register");
  };
  const navigateResetPassword = async () => {
    const email = refEmail.current.value;
   if(email){
    await sendPasswordResetEmail(email);
    toast('Sent email');
   }else{
     toast("Please Enter Your Email ")
   }

    // navigate("/register");
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center">please login</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={refEmail}
            type="email"
            placeholder="Enter email"
            required
          />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={refPassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="text-center bg-dark text-light mt-2 rounded">
       
        New to Ginious car?{" "}
        <Link
          to="/register"
          onClick={navigateRegister}
          className="text-center text-decoration-none text-danger"
        >
          Please Register
        </Link>
      </p>
      <p className="text-center bg-dark text-light mt-2   rounded">
       
        Forget Pssword
        <button
          to="/register"
          onClick={navigateResetPassword}
          className="text-center ms-2 text-decoration-none text-danger btn btn-link "
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />

    </div>
  );
};

export default Login;
