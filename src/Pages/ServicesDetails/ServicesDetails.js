import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";
import Checkout from "../Checkout/Checkout/Checkout";

const ServicesDetails = () => {
  const { serviceId } = useParams();

  // const [service,setService] = useState({});

    const [service] = useServiceDetails(serviceId)
 
  return (
    <div>
     
      
      <div className='text-center'>
      {/* <h4>this is services details{name}</h4> */}
      <h4>this is services details Id:{serviceId}</h4>
      
      <h5>
       Name:{service.name}
      </h5>
      <img src={service.img} alt=""/>
      <h2>Now Checkout </h2> 
                         <Link to={`/checkout/${serviceId}`}>
      <button  className='btn btn-success'>Checkout</button>  
      </Link>  
                     
                    </div>
      
    </div>
  );
};

export default ServicesDetails;
