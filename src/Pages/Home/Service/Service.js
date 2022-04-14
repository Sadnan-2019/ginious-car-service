import React from 'react';
import './Service.css'

const Service = ({service}) => {
          const {name,price,img,description} = service
          return (
                    <div className='service-container'>
                              <img src={img} className="img-fluid" alt=""/>
                           <h3>{name}</h3>
                           <h5>Price:{price}</h5>
                           <p><small>{description}</small></p>
                           <button>Book Service</button>   
                    </div>
          );
};

export default Service;