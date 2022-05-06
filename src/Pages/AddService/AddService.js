import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {

    e.target.reset();
            
          
          
          console.log(data)

          const url =`http://localhost:5000/service`
          fetch(url,{

                    method : "POST",
                    headers:{

                              "content-type" : "application/json"
                    },

                    body:JSON.stringify(data)
          })
          .then(res =>res.json())
          .then(result =>{
                    console.log(result)

                    
          })




};
  return (
    <div>
      <h2 className="text-center py-4">Please add service</h2>

      <form className="w-50 mx-auto d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" className="mb-3" {...register("name", { required: true, maxLength: 20 })} />
        <textarea placeholder="Description" className="mb-3"  {...register("description")} />
        <input placeholder="Price" className="mb-3"  type="number" {...register("price")} />
        <input placeholder="Photo Url" className="mb-3"  type="text" {...register("img")} />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
