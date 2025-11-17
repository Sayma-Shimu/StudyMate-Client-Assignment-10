import React, { useContext } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "./provider/AuthProvider";
import axios from "axios";

const ServiceCard = ({ service, showExperienceLevel = false }) => {
  const { user } = useContext(AuthContext);
 const userEmail = user?.email || user?.providerData?.[0]?.email || null;


  const handleSendRequest = () => {
    if (!userEmail) return toast.error("Please login to send a request");

    axios
      .post(`https://study-mates-projects.vercel.app/send-request/${service._id}`, { userEmail })
      .then((res) => {
        if (res.data.success) {
          toast.success("Request sent! PartnerCount updated.");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div className="p-4 border rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        src={service.profileImage}
        className="w-full object-cover h-44 rounded-xl mb-4"
      />

      <h2 className="text-xl font-bold mt-2">{service.name}</h2>
      <p className="text-gray-600">Subject: {service.subject}</p>
      <p className="text-gray-600">Mode: {service.studyMode}</p>
      {!showExperienceLevel && (
        <p className="text-gray-600">Rating:{service.rating}</p>
      )
      }

       {showExperienceLevel && (
        <p className="text-gray-600">ExperienceLevel: {service.experienceLevel}</p>
      )
      }

      <div className="mt-4 flex justify-between gap-2">
       
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
