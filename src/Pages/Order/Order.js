import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
// import { signOut } from "firebase/auth";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  console.log(orders);

  useEffect(( ) => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accesToken")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
             signOut(auth)
          navigate("/login");
        }
      }
    };

    getOrders();
  }, [user]);
  return (
    <div>
      <h3>Order Total:{orders.length}</h3>
      <h4>your order list</h4>
      <h4>Email Name : {user.email}</h4>
      {orders.map((order) => (
        <li>{order.service}</li>
      ))}
    </div>
  );
};

export default Order;
