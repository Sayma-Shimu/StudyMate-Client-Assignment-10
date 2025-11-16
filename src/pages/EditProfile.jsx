import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../components/provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../components/provider/AuthProvider";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const userEmail = user?.email;

  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (!userEmail) return;
    axios
      .get(`http://localhost:3000/partners?email=${userEmail}`)
      .then((res) => setProfile(res.data[0] || {}))
      .catch(() => toast.error("Failed to load profile"));
  }, [userEmail]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/partners/${profile._id}`, profile)
      .then(() => {
        toast.success("Profile Updated Successfully!");
        navigate("/profile");
      })
      .catch(() => toast.error("Update failed"));
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Edit Profile</h2>

      <form onSubmit={handleUpdate} className="grid gap-4">
        
        <input
          type="text"
          value={profile.name || ""}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="input input-bordered"
          placeholder="Name"
        />

        <input
          type="text"
          value={profile.profileImage || ""}
          onChange={(e) =>
            setProfile({ ...profile, profileImage: e.target.value })
          }
          className="input input-bordered"
          placeholder="Profile Image URL"
        />

        <input
          type="text"
          value={profile.subject || ""}
          onChange={(e) => setProfile({ ...profile, subject: e.target.value })}
          className="input input-bordered"
          placeholder="Subject"
        />

        <select
          value={profile.studyMode || ""}
          onChange={(e) => setProfile({ ...profile, studyMode: e.target.value })}
          className="select select-bordered"
        >
          <option>Online</option>
          <option>Offline</option>
        </select>

        <input
          type="text"
          value={profile.availabilityTime || ""}
          onChange={(e) =>
            setProfile({ ...profile, availabilityTime: e.target.value })
          }
          className="input input-bordered"
          placeholder="Availability Time"
        />

        <input
          type="text"
          value={profile.location || ""}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
          className="input input-bordered"
          placeholder="Location"
        />

        <select
          value={profile.experienceLevel || ""}
          onChange={(e) =>
            setProfile({ ...profile, experienceLevel: e.target.value })
          }
          className="select select-bordered"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>

        <button className="btn bg-blue-600 text-white mt-4">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
