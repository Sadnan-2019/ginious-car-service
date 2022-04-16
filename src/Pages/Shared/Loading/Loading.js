import React from "react";

const Loading = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary mt-5" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Loading...</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loading;
