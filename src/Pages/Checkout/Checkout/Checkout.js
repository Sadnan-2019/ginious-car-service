import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../../hooks/useServiceDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);
  const submitOrder = (event) => {
    event.preventDefault();

    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://agile-lake-44995.herokuapp.com/order", order)
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.insertedId) {
          toast("you order complete");
          event.target.reset();
        }
      });
  };

  //  const [user,setUser] = useState({

  //       name:"Somrat Skber",
  //       email:"akber@gmail.com",
  //       address:"akberdhanmondi kanbe lane",
  //       phone:"01892409715",
  //  })
  // const handleAddress=(event)=>{
  //   console.log(event.target.value)
  //     const {address, ...rest} = user;
  //     const newAddress = event.target.value;
  //     const newUser = {address: newAddress, ...rest}
  //     setUser(newUser)
  //     console.log(newUser)
  //   // console.log(event.target.value)
  // }

  return (
    <div className=" w-100 mx-auto ">
      <h2 className="text-center">This is order name: {service.name}</h2>

      <div className=" d-flex justify-content-center align-items-center ">
        <form className="w-50" onSubmit={submitOrder}>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control  w-100 "
              value={user?.displayName}
              name="name"
              required
              readOnly
              disabled
            />
          </div>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control  w-100 "
              value={user?.email}
              required
              readOnly
              disabled
            />
          </div>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">
              {" "}
              Address
            </label>
            <input
              type="text"
              className="form-control  w-100 "
              name="address"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">
              {" "}
              Phone
            </label>
            <input
              type="text"
              className="form-control  w-100 "
              name="phone"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">
              {" "}
              Service
            </label>

            <input
              type="text"
              className="form-control  w-100 "
              value={service.name}
              name="service"
              required
              readOnly
            />
          </div>

          <input type="submit" value="Add order" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
