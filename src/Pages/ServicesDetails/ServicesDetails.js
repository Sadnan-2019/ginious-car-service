import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Checkout from "../Checkout/Checkout/Checkout";

const ServicesDetails = () => {
  const { serviceId } = useParams();

  const [service,setService] = useState({});

  useEffect(()=>{

    const url=`http://localhost:5000/service/${serviceId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[])
  return (
    <div>
     
      
      <div className='text-center'>
      {/* <h4>this is services details{name}</h4> */}
      <h4>this is services details{serviceId}</h4>
      <p>
       Name:{service.name}
      </p>
                         <h2>Now Checkout </h2> 
                         <Link to="/checkout">
      <button  className='btn btn-success'>Checkout</button>  
      </Link>  
                     
                    </div>
      
    </div>
  );
};

export default ServicesDetails;
