import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router';
import UserForm from '../pages/UserForm';
const CardDetails = () => {
     const { id } = useParams();
  const [service, setService] = useState([]);
  
  
  
  useEffect(() => {
   
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find(
          (item) => item.serviceId === parseInt(id)
        
        );
        setService(selected);
        
      });
  }, [id]);
 
  if (!service) {
    return (
      <div className="flex  justify-center items-center ">
        <div className=" font-bold text-fuchsia-700 text-lg">
                 </div>
      </div>
    );
  }

  
  return (
    <div>
      
       <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
     
      <img
        src={service?.image}
        alt={service?.serviceName}
        className="rounded-xl shadow-md w-full h-48 md:h-[400px] object-cover"
        
      />
      {/* Details */}
      <div className="space-y-3">
        <div className=" text-xl lg:text-2xl font-bold text-indigo-700">
          <p>{service?.serviceName}</p>
               <p className='text-sm italic text-fuchsia-600 mt-2'>{service.providerName}</p>
               <p className='text-sm italic  mt-2'>{service.providerEmail}</p>

        </div>
        <p className="text-gray-600">{service.description}</p>
        <div className='flex justify-around items-center'>
            <p className="text-yellow-500 font-semibold">
          ⭐  {service?.rating}
        </p>

        <p className="text-orange-500 font-semibold">
          ${service?.price}
        </p>
        </div>
        <p className="text-indigo-600 text-xl font-semibold">
           {service?.category}
        </p>

      </div>
    </div>
    <UserForm></UserForm>
     
   
    </div>
  )
}

export default CardDetails