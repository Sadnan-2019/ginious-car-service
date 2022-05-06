import React from "react";
import useServices from "../../hooks/UseServices";

const ManageService = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure for delete");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remining = services.filter((service) => service._id !== id);
            setServices(remining);
          }
          console.log(data);
        });
    }
  };
  return (
    <div className="App">
      <h1>Manage service</h1>

      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}

            <button onClick={() => handleDelete(service._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
