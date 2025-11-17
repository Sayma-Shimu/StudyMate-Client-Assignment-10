import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../components/provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 p-6 text-white text-center">
          <h2 className="text-3xl font-bold">My Profile</h2>
          <p className="mt-1 opacity-90">{user?.displayName}</p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-16">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Info Section */}
        <div className="p-6 space-y-4 text-gray-700 text-lg">
          <div>
            <span className="font-semibold text-gray-600">Name: </span>
            {user?.displayName}
          </div>
          <div>
            <span className="font-semibold text-gray-600">Email: </span>
            {user?.email}
          </div>
        </div>

        {/* Edit Button */}
        <div className="p-6 text-center">
          <Link to="/editprofile">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all duration-300">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
