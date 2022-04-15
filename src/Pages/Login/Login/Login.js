import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";


const Login = () => {

const location =useLocation();
const from = location.state?.from?.pathname || "/";
      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);
  const refEmail = useRef("");
  const refPassword = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = refEmail.current.value;
    const password = refPassword.current.value;
    signInWithEmailAndPassword(email,password)
    navigate(from, { replace: true });
//     console.log(email, password);
  };
  if(user){
        navigate('/home')
  }

  const navigateRegister = (event) => {
    navigate("/register");
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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
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
    </div>
  );
};

export default Login;
