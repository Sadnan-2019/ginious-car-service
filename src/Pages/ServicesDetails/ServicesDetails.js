import React from "react";
import { Link, useParams } from "react-router-dom";
import Checkout from "../Checkout/Checkout/Checkout";

const ServicesDetails = () => {
  const { serviceId,name } = useParams();
  return (
    <div>
     
      
      <div className='text-center'>
      {/* <h4>this is services details{name}</h4> */}
      <h4>this is services details{serviceId}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        molestias, dicta possimus corporis natus sequi modi iure voluptates sit,
        amet voluptatum, culpa corrupti hic! Deleniti aut ex officiis
        dignissimos doloremque?
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
