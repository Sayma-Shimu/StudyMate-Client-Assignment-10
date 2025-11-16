import React, { useContext } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "./provider/AuthProvider";


const ServiceCard = ({ service }) => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || user?.providerData[0]?.email;
  
  console.log(userEmail);
  

const handleSendRequest = () => {
  if (!userEmail) return toast.error("Please login to send a request");

  fetch(`http://localhost:3000/send-request/${service._id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userEmail }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        toast.success("Request sent! PartnerCount updated.");
      } else {
        toast.error(data.message);
      }
    });
};



  return (
    <div className="p-4 border rounded-xl shadow-md">
      <img src={service.profileImage} className="w-full object-cover h-40 rounded-lg" />

      <h2 className="text-xl font-semibold mt-3">{service.name}</h2>
      <p>Subject: {service.subject}</p>
      <p>Mode: {service.studyMode}</p>

      <div className="mt-4 flex justify-between">
        <Link
          to={`/details/${service._id}`}
          className="px-3 py-2 bg-green-600 text-white rounded-lg"
        >
          View Profile
        </Link>

        <button
          onClick={handleSendRequest}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg"
        >
          Send Request
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
