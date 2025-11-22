import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router";
import { AuthContext } from "../components/provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import { MdEmail, MdLocationPin } from "react-icons/md";
import {
  FaBookOpen,
  FaUser,
  FaClock,
  FaStar,
  FaUserFriends,
  FaLayerGroup,
} from "react-icons/fa";

const DetailsPage = () => {
  const partner = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSendRequest = async () => {
    try {
      const res = await axios.post(
        `https://study-mates-projects.vercel.app/send-request/${partner._id}`,
        { userEmail: user?.email }
      );

      if (res.data.success) {
        toast.success("Partner Request Sent Successfully!");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 p-6 text-white text-center">
          <h1 className="text-4xl font-bold tracking-wide">{partner.name}</h1>
          <p className="text-sm mt-1 opacity-90">Study Partner Profile</p>
        </div>

        {/* Image */}
        <div className="flex justify-center mt-6">
          <img
            src={partner.profileImage}
            alt={partner.name}
            className="w-52 h-52 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>

        {/* Info Section */}
        <div className="p-6 space-y-5 text-gray-700">
          
          {/* Rating */}
          <div className="flex items-center gap-3 text-lg font-semibold">
            <FaStar className="text-yellow-500 text-2xl" />
            <span>Rating: {partner.rating}</span>
          </div>

          {/* Subject */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <FaBookOpen className="text-green-600 text-2xl" />
            <span>Subject: {partner.subject}</span>
          </div>

          {/* Study Mode */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <FaUser className="text-green-600 text-2xl" />
            <span>Study Mode: {partner.studyMode}</span>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <FaClock className="text-green-600 text-2xl" />
            <span>Availability: {partner.availabilityTime}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <MdLocationPin className="text-green-600 text-2xl" />
            <span>Location: {partner.location}</span>
          </div>

          {/* Experience Level */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <FaLayerGroup className="text-green-600 text-2xl" />
            <span>Experience Level: {partner.experienceLevel}</span>
          </div>

          {/* Partner Count */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <FaUserFriends className="text-green-600 text-2xl" />
            <span>Partner Count: {partner.partnerCount}</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <MdEmail className="text-green-600 text-2xl" />
            <span>Email: {partner.email}</span>
          </div>
        </div>

        {/* Button */}
        <div className="p-6 text-center">
          <button
            onClick={handleSendRequest}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Send Partner Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
