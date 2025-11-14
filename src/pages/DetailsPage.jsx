import React from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../components/provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const partner = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSendRequest = async () => {
    const res = await fetch(`http://localhost:3000/send-request/${partner._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user?.email }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Request Sent!");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h1 className="text-3xl font-semibold">{partner.name}</h1>

      <img src={partner.profileImage} className="w-48 rounded mt-5" />
      <p className="mt-3">Subject: {partner.subject}</p>
      <p>Study Mode: {partner.studyMode}</p>

      <button
        onClick={handleSendRequest}
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Send Partner Request
      </button>
    </div>
  );
};

export default DetailsPage;
