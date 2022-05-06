import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Pages/Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  const location = useLocation();

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log(user)
  if ( user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="App">
        <h3 className="text-danger">Your email is not verified</h3>
        <h3 className="text-success">Please verify your email address</h3>
        

        <button className="btn btn-info" 
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Verify email
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
