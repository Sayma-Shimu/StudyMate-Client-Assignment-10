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
      .post(
        `https://study-mates-projects.vercel.app/send-request/${service._id}`,
        { userEmail }
      )
      .then((res) => {
        if (res.data.success) {
          toast.success("Request sent successfully!");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={service.profileImage}
          alt={service.name}
          className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-green-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            {service.studyMode}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-green-600 transition-colors">
          {service.name}
        </h2>

        <div className="mt-3 space-y-1">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex justify-between">
            <span>Subject:</span>
            <span className="font-semibold text-gray-700 dark:text-gray-200">{service.subject}</span>
          </p>

          {!showExperienceLevel && (
            <p className="text-sm text-gray-500 dark:text-gray-400 flex justify-between">
              <span>Rating:</span>
              <span className="font-bold text-yellow-500">⭐ {service.rating}</span>
            </p>
          )}

          {showExperienceLevel && (
            <p className="text-sm text-gray-500 dark:text-gray-400 flex justify-between">
              <span>Experience:</span>
              <span className="font-semibold text-green-600 dark:text-green-400">{service.experienceLevel}</span>
            </p>
          )}
        </div>

        {/* Spacer to push buttons to the bottom */}
        <div className="flex-grow"></div>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            to={`/details/${service._id}`}
            className="flex-1 py-3 text-xs font-bold text-center rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-green-600 hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-600"
          >
            View Profile
          </Link>

          <button
            onClick={handleSendRequest}
            className="flex-1 py-3 text-xs font-bold rounded-xl bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-200 dark:shadow-none transition-all duration-300 transform active:scale-95"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;