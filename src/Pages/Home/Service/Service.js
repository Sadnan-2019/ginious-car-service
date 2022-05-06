import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
          const {_id,name,price,img,description} = service;
          const navigate = useNavigate()
          

          const handleSingleBookDetails=(id)=>{
            navigate(`/service/${id}`)


          }
          return (
                    <div className='service-container'>
                              <img src={img} className="img-fluid" alt=""/>
                           <h3>{name}</h3>
                           <h5>Price:{price}</h5>
                           <p><small>{description}</small></p>
                           <button onClick={()=>handleSingleBookDetails(_id)}>Book Service</button>   
                    </div>
          );
};

export default Service;