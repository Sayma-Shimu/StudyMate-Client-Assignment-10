import React from "react";
import { useLoaderData } from "react-router";


const DetailsPage = () => {
  const partner = useLoaderData();
  console.log(partner)

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">

      {/* Profile Image */}
      <div className="flex items-center gap-6">
        <img
          src={partner.profileImage}
          alt={partner.name}
          className="w-40 h-40 rounded-xl object-cover shadow"
        />

        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{partner.name}</h1>

          <p className="text-gray-600 mt-2">
            <span className="font-medium">Subject:</span> {partner.subject}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">Study Mode:</span> {partner.studyMode}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">Experience:</span> {partner.experienceLevel}
          </p>
        </div>
      </div>

      {/* More Info */}
      <div className="mt-6 space-y-2">
        <p><strong>Rating:</strong> ⭐ {partner.rating}</p>
        <p><strong>Availability:</strong> {partner.availability}</p>
        <p><strong>Location:</strong> {partner.location}</p>
        <p><strong>Total Partner Count:</strong> {partner.partnerCount}</p>
      </div>

      {/* Button */}
      <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
        Send Partner Request
      </button>
    </div>
  );
};

export default DetailsPage;
