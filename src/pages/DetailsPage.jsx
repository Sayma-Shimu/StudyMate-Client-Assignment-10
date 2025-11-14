import React, { useState } from "react";
import { useLoaderData } from "react-router";
// import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const partner = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [partnerCount, setPartnerCount] = useState(partner.partnerCount || 0);

  const handleSendRequest = async () => {
    try {
      setLoading(true);
      const userEmail = "user@example.com"; // replace with logged-in user's email

      const res = await fetch(`http://localhost:3000/send-request/${partner._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        setPartnerCount((prev) => prev + 1);
      } else {
        toast.error(data.message || "Failed to send request");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
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

      <div className="mt-6 space-y-2">
        <p><strong>Rating:</strong> ⭐ {partner.rating}</p>
        <p><strong>Availability:</strong> {partner.availability}</p>
        <p><strong>Location:</strong> {partner.location}</p>
        <p><strong>Total Partner Count:</strong> {partnerCount}</p>
      </div>

      <button
        onClick={handleSendRequest}
        disabled={loading}
        className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Partner Request"}
      </button>
    </div>
  );
};

export default DetailsPage;
