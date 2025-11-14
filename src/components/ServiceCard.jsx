import React from "react";
import { Link } from "react-router";


const ServiceCard = ({ service }) => {
  // const { image, serviceName, rating, price } = service;
 
  
 
  

  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300">
     
       <img src={service?.image} alt="" className="w-full h-56 object-contain bg-gray-100" />
      <div className="p-5 space-y-3">

        <h3 className="text-xl font-semibold text-gray-800">{service?.serviceName}</h3>

        <div className="flex justify-between items-center text-gray-600">
          <span className="font-bold text-yellow-500">⭐ {service?.rating}</span>
          <span className="font-bold text-blue-600">${service?.price}</span>
        </div>
        
        <Link to={`/service/${service?.serviceId}`} className="btn bg-blue-600 text-white font-semibold hover:bg-blue-200 hover:text-blue-700 w-full mt-2">View Details</Link>
      </div>

    </div>
  );
};

export default ServiceCard;
