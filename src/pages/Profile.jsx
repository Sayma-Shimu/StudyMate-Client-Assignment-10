import React, { useContext } from "react";
// import { AuthContext } from "../components/provider/AuthProvider";
import { Link } from "react-router";
import { AuthContext } from "../components/provider/AuthProvider";
// import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>

      <div className="flex flex-col items-center">
        <img
          src={user?.photoURL}
          alt="User"
          className="w-28 h-28 rounded-full mb-4 shadow-md"
        />

        <p className="text-lg font-semibold">
          <span className="text-gray-600">Name:</span> {user?.displayName}
        </p>

        <p className="text-lg font-semibold">
          <span className="text-gray-600">Email:</span> {user?.email}
        </p>

        <Link to="/editprofile">
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
