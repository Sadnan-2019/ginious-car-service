import React from "react";
import googleImg from "../../../images/expert/google.png";
import fbImg from "../../../images/expert/fb.png";
import gitImg from "../../../images/expert/git.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, Githubuser, Githubloading, Githuberror] =
    useSignInWithGithub(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [token] = useToken(user || Githubuser);

  let errorElement;

  if (error || Githuberror) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {Githuberror?.message}{" "}
        </p>
      </div>
    );
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="bg-dark w-50" style={{ height: "2px" }}></div>
        <p className="mt-2 mx-5">or</p>
        <div className="bg-dark w-50" style={{ height: "2px" }}></div>
      </div>
      {errorElement}
      <div>
        <button
          className="btn btn-dark w-100 my-2"
          onClick={() => signInWithGoogle()}
        >
          <img
            src={googleImg}
            className="me-2"
            style={{ width: "25px" }}
            alt=""
          />
          Sign in
        </button>
        <button className="btn btn-dark w-100 my-2">
          <img src={fbImg} className="me-2" style={{ width: "25px" }} alt="" />
          Facebook Sign in
        </button>
        <button
          className="btn btn-dark w-100 my-2"
          onClick={() => signInWithGithub()}
        >
          <img src={gitImg} className="me-2" style={{ width: "25px" }} alt="" />
          GitHub Sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
